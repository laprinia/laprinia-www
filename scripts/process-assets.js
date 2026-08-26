const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { execFileSync } = require("child_process");

// ================= CONFIG =================

const MASTER_QUALITY = 90;
const MASTER_EFFORT = 5;

const CONTENT_MAX_EDGE = 3200;

const HEADSHOT_MAX_PX = 1600;

const MOTION_WIDTH = 650;
const MOTION_QUALITY = 80;
const MOTION_FPS = 15;
const MAX_ANIMATED_MEGAPIXELS = 50;

const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const MAX_VIDEO_BYTES = 100 * 1024 * 1024;

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".tiff",
  ".bmp",
  ".webp",
  ".avif",
]);

const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm"]);

// ================= HELPERS =================

function copyDirectoryRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectoryRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function safeWrite(inputPath, outputPath, transform) {
  const isSameFile = inputPath === outputPath;

  if (isSameFile) {
    const tempPath = outputPath.replace(/(\.\w+)$/, ".tmp$1");
    await transform(inputPath, tempPath);
    fs.renameSync(tempPath, outputPath);
  } else {
    await transform(inputPath, outputPath);
    // fs.unlinkSync(inputPath);  <-- REMOVE this line
  }
}

// ================= CONTENT =================

async function warnIfOverAnimatedLimit(filePath) {
  try {
    const meta = await sharp(filePath, { animated: true }).metadata();
    const frames = meta.pages || 1;
    const megapixels = (meta.width * (meta.pageHeight || meta.height) * frames) / 1e6;
    if (megapixels > MAX_ANIMATED_MEGAPIXELS) {
      console.warn(
        `  WARNING: ${path.basename(filePath)} is ${megapixels.toFixed(0)}MP across ${frames} frames, over Cloudinary's ${MAX_ANIMATED_MEGAPIXELS}MP animated limit. It will be served untransformed. Shorten the clip or lower MOTION_FPS.`,
      );
    }
  } catch {}
}

function warnIfOversized(filePath, limit, label) {
  const { size } = fs.statSync(filePath);
  if (size > limit) {
    console.warn(
      `  WARNING: ${path.basename(filePath)} is ${(size / 1024 / 1024).toFixed(1)}MB, over the ${label} Cloudinary limit`,
    );
  }
  return size;
}

async function convertContentToMasters(contentDir) {
  if (!fs.existsSync(contentDir)) {
    console.log("  No content/ directory found, skipping.");
    return;
  }

  const files = fs.readdirSync(contentDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    const inputPath = path.join(contentDir, file);

    if (VIDEO_EXTENSIONS.has(ext)) {
      warnIfOversized(inputPath, MAX_VIDEO_BYTES, "100MB video");
      console.log(`  KEEP (video) ${file}`);
      continue;
    }

    if (!IMAGE_EXTENSIONS.has(ext)) {
      console.log(`  SKIP (unsupported) ${file}`);
      continue;
    }

    const outputPath = path.join(contentDir, `${baseName}.webp`);

    await safeWrite(inputPath, outputPath, async (inPath, outPath) => {
      await sharp(inPath)
        .resize({
          width: CONTENT_MAX_EDGE,
          height: CONTENT_MAX_EDGE,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: MASTER_QUALITY, effort: MASTER_EFFORT })
        .toFile(outPath);
    });

    const size = warnIfOversized(outputPath, MAX_IMAGE_BYTES, "10MB image");
    console.log(
      `  MASTER ${file} → ${baseName}.webp (${(size / 1024 / 1024).toFixed(1)}MB)`,
    );
  }
}

// ================= HEADSHOTS =================

async function processHeadshots(projectDir) {
  const entries = fs
    .readdirSync(projectDir)
    .filter((f) => !fs.statSync(path.join(projectDir, f)).isDirectory());

  // -------- STATIC THUMBNAIL --------
  const imgSource = entries.find((f) => {
    const ext = path.extname(f).toLowerCase();
    const name = path.basename(f, ext).toLowerCase();
    return name === "headshot-img" && IMAGE_EXTENSIONS.has(ext);
  });

  const hasMaster = entries.some(
    (f) => f.toLowerCase() === "headshot-img.webp"
  );

  if (imgSource) {
    const inputPath = path.join(projectDir, imgSource);
    const outputPath = path.join(projectDir, "headshot-img.webp");

    await safeWrite(inputPath, outputPath, async (inPath, outPath) => {
      await sharp(inPath)
        .resize({
          width: HEADSHOT_MAX_PX,
          height: HEADSHOT_MAX_PX,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: MASTER_QUALITY, effort: MASTER_EFFORT })
        .toFile(outPath);
    });

    warnIfOversized(outputPath, MAX_IMAGE_BYTES, "10MB image");
    console.log(`  ${imgSource} → headshot-img.webp`);
  } else if (hasMaster) {
    console.log(`  SKIP headshot-img.webp`);
  } else {
    console.warn("  WARNING: No static thumbnail (headshot-img) found");
  }

  // -------- ANIMATED OR COLORFUL FALLBACK --------
  const animSource = entries.find((f) => {
    const ext = path.extname(f).toLowerCase();
    const name = path.basename(f, ext).toLowerCase();
    return name === "headshot" && (VIDEO_EXTENSIONS.has(ext) || ext === ".gif");
  });

  const webpOutput = path.join(projectDir, "headshot.webp");

  if (animSource) {
    // Video / GIF → generate animated webp
    const inputPath = path.join(projectDir, animSource);
    const ext = path.extname(animSource).toLowerCase();

    if (VIDEO_EXTENSIONS.has(ext)) {
      try {
        execFileSync("ffmpeg", [
          "-i",
          inputPath,
          "-vf",
          `scale=${MOTION_WIDTH}:-1:flags=lanczos,fps=${MOTION_FPS}`,
          "-c:v",
          "libwebp",
          "-loop",
          "0",
          "-quality",
          String(MOTION_QUALITY),
          "-compression_level",
          "4",
          "-preset",
          "picture",
          "-y",
          webpOutput,
        ]);
        fs.unlinkSync(inputPath);
        await warnIfOverAnimatedLimit(webpOutput);
        console.log(`  ${animSource} → headshot.webp (animated video)`);
      } catch (err) {
        console.warn(
          `  WARNING: Animated WebP conversion failed for ${animSource}. Falling back to a static WebP thumbnail.`,
        );
        const framePath = path.join(projectDir, "headshot-frame.png");
        try {
          execFileSync("ffmpeg", [
            "-i",
            inputPath,
            "-ss",
            "00:00:00",
            "-frames:v",
            "1",
            "-update",
            "1",
            "-y",
            framePath,
          ]);
          await sharp(framePath)
            .resize({
              width: MOTION_WIDTH,
              height: MOTION_WIDTH,
              fit: "inside",
              withoutEnlargement: true,
            })
            .webp({ quality: MOTION_QUALITY, effort: MASTER_EFFORT })
            .toFile(webpOutput);
          fs.unlinkSync(framePath);
          console.log(`  ${animSource} → headshot.webp (static fallback)`);
        } catch (fallbackErr) {
          console.error(
            `  ERROR: Fallback static thumbnail failed for ${animSource}: ${fallbackErr.message}`,
          );
          throw err;
        }
      }
    } else {
      await safeWrite(inputPath, webpOutput, async (inPath, outPath) => {
        await sharp(inPath, { animated: true })
          .resize({
            width: MOTION_WIDTH,
            height: MOTION_WIDTH,
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({ quality: MOTION_QUALITY, effort: MASTER_EFFORT })
          .toFile(outPath);
      });
      await warnIfOverAnimatedLimit(webpOutput);
      console.log(`  ${animSource} → headshot.webp (animated GIF)`);
    }
  } else {
    // 🔥 FALLBACK: use colorful static headshot.png
    const fallbackSource = entries.find((f) => {
      const ext = path.extname(f).toLowerCase();
      const name = path.basename(f, ext).toLowerCase();
      return name === "headshot" && IMAGE_EXTENSIONS.has(ext);
    });

    if (fallbackSource) {
      const inputPath = path.join(projectDir, fallbackSource);

      await sharp(inputPath)
        .resize({
          width: MOTION_WIDTH,
          height: MOTION_WIDTH,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: MOTION_QUALITY, effort: MASTER_EFFORT })
        .toFile(webpOutput);

      console.log(
        `  ${fallbackSource} → headshot.webp (static fallback, COLOR)`
      );
    } else {
      console.warn(
        "  WARNING: No animated OR fallback headshot found"
      );
    }
  }
}

// ================= MAIN =================

async function main() {
  const folderArg = process.argv[2];

  if (!folderArg) {
    console.error("Usage: node script <project-folder>");
    process.exit(1);
  }

  const originalDir = path.resolve(folderArg);

  if (!fs.existsSync(originalDir) || !fs.statSync(originalDir).isDirectory()) {
    console.error("Invalid directory");
    process.exit(1);
  }

  const parentDir = path.dirname(originalDir);
  const slug = path.basename(originalDir);

  const uploadRoot = path.join(parentDir, "upload");
  const uploadDir = path.join(uploadRoot, slug);

  console.log(`\nPreparing upload folder...\n`);

  if (!fs.existsSync(uploadRoot)) {
    fs.mkdirSync(uploadRoot);
  }

  if (fs.existsSync(uploadDir)) {
    fs.rmSync(uploadDir, { recursive: true, force: true });
  }

  copyDirectoryRecursive(originalDir, uploadDir);

  console.log(`Processing "${slug}" → upload/${slug}\n`);

  console.log("1) Headshots");
  await processHeadshots(uploadDir);

  console.log("\n2) Content");
  await convertContentToMasters(path.join(uploadDir, "content"));

  console.log("\nDone ✅ Originals untouched.\n");
}

main().catch((err) => {
  console.error("Processing failed:", err);
  process.exit(1);
});