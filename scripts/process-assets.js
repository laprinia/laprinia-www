const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { execFileSync } = require("child_process");

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".tiff",
  ".bmp",
  ".webp",
]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm"]);

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

    if (ext === ".avif") {
      console.log(`  SKIP (already AVIF) ${file}`);
      continue;
    }
    if (VIDEO_EXTENSIONS.has(ext)) {
      console.log(`  SKIP (video) ${file}`);
      continue;
    }
    if (!IMAGE_EXTENSIONS.has(ext)) {
      console.log(`  SKIP (unsupported) ${file}`);
      continue;
    }

    const outputPath = path.join(contentDir, `${baseName}.avif`);
    await sharp(inputPath).avif({ quality: 80 }).toFile(outputPath);
    fs.unlinkSync(inputPath);
    console.log(`  CONVERTED ${file} → ${baseName}.avif`);
  }
}

async function processHeadshots(projectDir) {
  const entries = fs
    .readdirSync(projectDir)
    .filter((f) => !fs.statSync(path.join(projectDir, f)).isDirectory());

  const ALL_IMAGE_EXTENSIONS = new Set([...IMAGE_EXTENSIONS, ".gif"]);

  const imgSource = entries.find((f) => {
    const ext = path.extname(f).toLowerCase();
    const name = path.basename(f, ext).toLowerCase();
    return name === "headshot-img" && ALL_IMAGE_EXTENSIONS.has(ext);
  });

  const animSource = entries.find((f) => {
    const ext = path.extname(f).toLowerCase();
    const name = path.basename(f, ext).toLowerCase();
    return (
      name === "headshot" &&
      (VIDEO_EXTENSIONS.has(ext) || ext === ".gif")
    );
  });

  if (imgSource) {
    const inputPath = path.join(projectDir, imgSource);
    const avifOutput = path.join(projectDir, "headshot-img.avif");
    await sharp(inputPath).grayscale().avif({ quality: 80 }).toFile(avifOutput);
    fs.unlinkSync(inputPath);
    console.log(`  ${imgSource} → headshot-img.avif (B&W)`);
  } else {
    console.warn(
      "  WARNING: No static headshot found (expected headshot-img.{png,jpg,...})",
    );
  }

  if (animSource) {
    const inputPath = path.join(projectDir, animSource);
    const ext = path.extname(animSource).toLowerCase();
    const webpOutput = path.join(projectDir, "headshot.webp");

    if (VIDEO_EXTENSIONS.has(ext)) {
      execFileSync("ffmpeg", [
        "-i", inputPath,
        "-vf", "scale=480:-1,fps=15",
        "-c:v", "libwebp",
        "-loop", "0",
        "-quality", "50",
        "-compression_level", "6",
        "-y", webpOutput,
      ]);
      console.log(`  ${animSource} → headshot.webp (B&W, compressed, animated)`);
    } else {
      await sharp(inputPath, { animated: true })
        .resize(480)
        .webp({ quality: 50, effort: 6 })
        .toFile(webpOutput);
      console.log(`  ${animSource} → headshot.webp (B&W, compressed, animated)`);
    }
    fs.unlinkSync(inputPath);
  } else {
    console.warn(
      "  WARNING: No animated headshot found (expected headshot.{mov,mp4,gif})",
    );
  }
}

async function main() {
  const folderArg = process.argv[2];
  if (!folderArg) {
    console.error(
      "Usage: node scripts/process-assets.js <path-to-project-folder>\n" +
        "Example: node scripts/process-assets.js public/projects/my-project",
    );
    process.exit(1);
  }

  const projectDir = path.resolve(folderArg);
  if (!fs.existsSync(projectDir) || !fs.statSync(projectDir).isDirectory()) {
    console.error(`Not a valid directory: ${projectDir}`);
    process.exit(1);
  }

  const slug = path.basename(projectDir);
  console.log(`\nProcessing assets for "${slug}"...\n`);

  console.log("1) Headshots (B&W conversion)");
  await processHeadshots(projectDir);

  console.log("\n2) Content assets (AVIF conversion)");
  await convertContentToAvif(path.join(projectDir, "content"));

  console.log("\nDone!\n");
}

main().catch((err) => {
  console.error("Processing failed:", err);
  process.exit(1);
});
