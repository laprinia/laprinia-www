const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

const PUBLIC_DIR = path.join(__dirname, "..", "public", "projects");

const SUPPORTED_EXTENSIONS = new Set([
  ".avif",
  ".webp",
  ".png",
  ".jpg",
  ".jpeg",
  ".mp4",
  ".mov",
  ".webm",
  ".obj",
  ".glb",
  ".gltf",
  ".svg",
]);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function walkDir(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(fullPath));
    } else if (
      SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
    ) {
      results.push(fullPath);
    }
  }
  return results;
}

async function upload(filePath) {
  let relativePath = path.relative(
    path.join(__dirname, "..", "public"),
    filePath,
  );
  
  // Normalize slashes first (important on Windows)
  relativePath = relativePath.replace(/\\/g, "/");
  
  // Remove "upload/" only if it appears after "projects/"
  relativePath = relativePath.replace(/^projects\/upload\//, "projects/");
  const ext = path.extname(filePath).toLowerCase();
  const publicId = relativePath
    .replace(/\.[^.]+$/, "")
    .replace(/\\/g, "/")
    .replace(/^\.\//, "");
  const resourceType = [".mp4", ".mov", ".webm"].includes(ext)
    ? "video"
    : [".obj", ".glb", ".gltf"].includes(ext)
      ? "raw"
      : "image";

  try {
    const existing = await cloudinary.api.resource(publicId, {
      resource_type: resourceType,
    });
    if (existing) {
      console.log(`  SKIP (exists) ${relativePath}`);
      return { skipped: true };
    }
  } catch {}

  const folder = path.posix.dirname(publicId);
  const filename = path.posix.basename(publicId);

  const uploadOpts = {
    public_id: filename,
    resource_type: resourceType,
    overwrite: false,
  };
  if (folder && folder !== ".") {
    uploadOpts.folder = folder;
  }

  const result = await cloudinary.uploader.upload(filePath, uploadOpts);

  console.log(`  UPLOADED ${relativePath} → ${result.secure_url}`);
  return { skipped: false, url: result.secure_url };
}

async function main() {
  if (
    !process.env.CLOUDINARY_CLOUD_NAME ||
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET
  ) {
    console.error(
      "Missing env vars. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.",
    );
    process.exit(1);
  }

  const extraArgs = process.argv.slice(2);
  let files;
  if (extraArgs.length) {
    files = [];
    for (const arg of extraArgs) {
      const resolved = path.resolve(arg);
      if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
        files.push(...walkDir(resolved));
      } else {
        files.push(resolved);
      }
    }
  } else {
    files = walkDir(PUBLIC_DIR);
  }
  console.log(`Found ${files.length} assets to upload.\n`);

  let uploaded = 0;
  let skipped = 0;

  for (const file of files) {
    const result = await upload(file);
    if (result.skipped) skipped++;
    else uploaded++;
  }

  console.log(
    `\nDone. ${uploaded} uploaded, ${skipped} skipped (already existed).`,
  );
}

main().catch((err) => {
  console.error("Upload failed:", err);
  process.exit(1);
});
