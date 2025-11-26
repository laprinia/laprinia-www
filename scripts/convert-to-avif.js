const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

/**
 * Recursively walk a directory and collect all files that match the predicate.
 * @param {string} dir
 * @param {(filePath: string) => boolean} predicate
 * @param {string[]} acc
 * @returns {string[]}
 */
function walk(dir, predicate, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, predicate, acc);
    } else if (entry.isFile() && predicate(fullPath)) {
      acc.push(fullPath);
    }
  }

  return acc;
}

function isConvertibleImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ext === ".png" || ext === ".webp";
}

async function convertFileToAvif(inputPath) {
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath, path.extname(inputPath));
  const outputPath = path.join(dir, `${base}.avif`);

  // Skip if AVIF already exists
  if (fs.existsSync(outputPath)) {
    console.log(`Skipping (exists): ${path.relative(PUBLIC_DIR, outputPath)}`);
    return;
  }

  console.log(
    `Converting: ${path.relative(PUBLIC_DIR, inputPath)} -> ${path.relative(
      PUBLIC_DIR,
      outputPath,
    )}`,
  );

  await sharp(inputPath)
    .avif({
      quality: 65,
      effort: 4,
    })
    .toFile(outputPath);
}

async function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`Public directory not found at: ${PUBLIC_DIR}`);
    process.exit(1);
  }

  console.log(`Scanning for PNG/WEBP images in: ${PUBLIC_DIR}`);

  const imageFiles = walk(PUBLIC_DIR, isConvertibleImage);

  if (imageFiles.length === 0) {
    console.log("No PNG or WEBP files found. Nothing to convert.");
    return;
  }

  console.log(`Found ${imageFiles.length} images to process.`);

  let successCount = 0;
  let errorCount = 0;

  for (const file of imageFiles) {
    try {
      await convertFileToAvif(file);
      successCount += 1;
    } catch (err) {
      errorCount += 1;
      console.error(
        `Error converting ${path.relative(PUBLIC_DIR, file)}:`,
        err.message || err,
      );
    }
  }

  console.log(
    `Done. Successfully converted ${successCount} file(s). ${errorCount} error(s).`,
  );
}

main().catch((err) => {
  console.error("Unexpected error during AVIF conversion:", err);
  process.exit(1);
});


