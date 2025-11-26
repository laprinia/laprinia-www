const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

function walk(dir, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, acc);
    } else if (entry.isFile()) {
      acc.push(fullPath);
    }
  }

  return acc;
}

function isPngOrWebp(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ext === ".png" || ext === ".webp";
}

function getAvifPath(filePath) {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath, path.extname(filePath));
  return path.join(dir, `${base}.avif`);
}

function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`Public directory not found at: ${PUBLIC_DIR}`);
    process.exit(1);
  }

  console.log(`Scanning for PNG/WEBP images to remove in: ${PUBLIC_DIR}`);

  const allFiles = walk(PUBLIC_DIR);
  const candidates = allFiles.filter(isPngOrWebp);

  if (candidates.length === 0) {
    console.log("No PNG or WEBP files found. Nothing to delete.");
    return;
  }

  let deleted = 0;
  let skipped = 0;

  for (const file of candidates) {
    const avifPath = getAvifPath(file);
    if (fs.existsSync(avifPath)) {
      fs.unlinkSync(file);
      deleted += 1;
      console.log(
        `Deleted: ${path.relative(PUBLIC_DIR, file)} (AVIF exists: ${path.relative(
          PUBLIC_DIR,
          avifPath,
        )})`,
      );
    } else {
      skipped += 1;
      console.log(
        `Skipped (no AVIF): ${path.relative(PUBLIC_DIR, file)}`,
      );
    }
  }

  console.log(
    `Done. Deleted ${deleted} file(s). Skipped ${skipped} without matching AVIF.`,
  );
}

main();


