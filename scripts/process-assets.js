const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { execFileSync } = require("child_process");

// ================= CONFIG =================

const REPROCESS_AVIF = true;

const HEADSHOT_MAX_PX = 700;
const HEADSHOT_AVIF_QUALITY = 60;
const HEADSHOT_WEBP_QUALITY = 60;

const HEADSHOT_FFMPEG_WIDTH = 5500;   
const HEADSHOT_FFMPEG_WEBP_Q = 80;  

const CONTENT_MAX_WIDTH = 1200;
const CONTENT_MAX_HEIGHT = 900;
const CONTENT_AVIF_QUALITY = 75;
const CONTENT_AVIF_EFFORT = 7;

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

async function convertContentToAvif(contentDir) {
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
      console.log(`  SKIP (video) ${file}`);
      continue;
    }

    if (ext === ".avif" && !REPROCESS_AVIF) {
      console.log(`  SKIP (already AVIF) ${file}`);
      continue;
    }

    if (!IMAGE_EXTENSIONS.has(ext)) {
      console.log(`  SKIP (unsupported) ${file}`);
      continue;
    }

    const outputPath = path.join(contentDir, `${baseName}.avif`);

    await safeWrite(inputPath, outputPath, async (inPath, outPath) => {
      await sharp(inPath)
        .resize({
          width: CONTENT_MAX_WIDTH,
          height: CONTENT_MAX_HEIGHT,
          fit: "inside",
          withoutEnlargement: true,
        })
        .avif({
          quality: CONTENT_AVIF_QUALITY,
          effort: CONTENT_AVIF_EFFORT,
        })
        .toFile(outPath);
    });

    console.log(`  CONVERTED ${file} → ${baseName}.avif`);
  }
}

// ================= HEADSHOTS =================

async function processHeadshots(projectDir) {
  const entries = fs
    .readdirSync(projectDir)
    .filter((f) => !fs.statSync(path.join(projectDir, f)).isDirectory());

  // -------- STATIC THUMBNAIL (grayscale) --------
  const imgSource = entries.find((f) => {
    const ext = path.extname(f).toLowerCase();
    const name = path.basename(f, ext).toLowerCase();
    return name === "headshot-img" && IMAGE_EXTENSIONS.has(ext);
  });

  const hasHeadshotAvif = entries.some(
    (f) => f.toLowerCase() === "headshot-img.avif"
  );

  if (imgSource) {
    const inputPath = path.join(projectDir, imgSource);
    const outputPath = path.join(projectDir, "headshot-img.avif");

    await safeWrite(inputPath, outputPath, async (inPath, outPath) => {
      await sharp(inPath)
        .grayscale() // ONLY here
        .resize({
          width: HEADSHOT_MAX_PX,
          height: HEADSHOT_MAX_PX,
          fit: "inside",
          withoutEnlargement: true,
        })
        .avif({ quality: HEADSHOT_AVIF_QUALITY, effort: 7 })
        .toFile(outPath);
    });

    console.log(`  ${imgSource} → headshot-img.avif`);
  } else if (hasHeadshotAvif) {
    console.log(`  SKIP headshot-img.avif`);
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
      execFileSync("ffmpeg", [
        "-i",
        inputPath,
        "-vf",
        `scale=${HEADSHOT_FFMPEG_WIDTH}:-1:flags=lanczos,fps=24`,
        "-c:v",
        "libwebp",
        "-loop",
        "0",
        "-quality",
        String(HEADSHOT_FFMPEG_WEBP_Q),
        "-compression_level",
        "4",
        "-preset",
        "picture",
        "-y",
        webpOutput,
      ]);
      fs.unlinkSync(inputPath);
      console.log(`  ${animSource} → headshot.webp (animated video)`);
    } else {
      await safeWrite(inputPath, webpOutput, async (inPath, outPath) => {
        await sharp(inPath, { animated: true })
          .resize({
            width: HEADSHOT_MAX_PX,
            height: HEADSHOT_MAX_PX,
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({ quality: HEADSHOT_WEBP_QUALITY, effort: 6 })
          .toFile(outPath);
      });
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
          width: HEADSHOT_FFMPEG_WIDTH,
          height: HEADSHOT_FFMPEG_WIDTH,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({
          quality: 60, // static, colorful
          effort: 6,
        })
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
  await convertContentToAvif(path.join(uploadDir, "content"));

  console.log("\nDone ✅ Originals untouched.\n");
}

main().catch((err) => {
  console.error("Processing failed:", err);
  process.exit(1);
});