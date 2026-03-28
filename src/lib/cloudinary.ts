const VIDEO_EXTENSIONS = /\.(mp4|mov|webm)$/i;
const MAX_CLOUDINARY_WIDTH = 3200;

const ABSOLUTE_URL = /^https?:\/\//i;

export function isProjectAssetPath(localPath: string): boolean {
  const cleanPath = localPath.startsWith("/") ? localPath.slice(1) : localPath;
  return cleanPath.startsWith("projects/");
}

function requireCloudForProjectAssets(): string {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;
  if (!cloud) {
    throw new Error(
      "Set your Cloudinary cloud name for project images: add NEXT_PUBLIC_CLOUDINARY_CLOUD to .env.local, or reuse the upload script value via CLOUDINARY_CLOUD_NAME (wired in next.config.js). Restart the dev server after changing env.",
    );
  }
  return cloud;
}

function buildCloudinaryMediaUrl(
  localPath: string,
  cloud: string,
  opts?: { width?: number; quality?: string },
): string {
  const isVideo = VIDEO_EXTENSIONS.test(localPath);
  const resourceType = isVideo ? "video" : "image";

  const cappedWidth = opts?.width
    ? Math.min(opts.width, MAX_CLOUDINARY_WIDTH)
    : undefined;

  const transforms = [
    "f_auto",
    `q_${opts?.quality ?? "auto"}`,
    cappedWidth ? `w_${cappedWidth}` : null,
  ]
    .filter(Boolean)
    .join(",");

  const cleanPath = localPath.startsWith("/") ? localPath.slice(1) : localPath;

  return `https://res.cloudinary.com/${cloud}/${resourceType}/upload/${transforms}/${cleanPath}`;
}

function buildCloudinaryRawDeliveryUrl(localPath: string, cloud: string): string {
  const cleanPath = localPath.startsWith("/") ? localPath.slice(1) : localPath;
  const isVideo = VIDEO_EXTENSIONS.test(localPath);
  const resourceType = isVideo ? "video" : "image";
  const isAnimatedWebp = /\.webp$/i.test(localPath);
  const transforms = isAnimatedWebp ? "fl_animated" : "";

  const base = `https://res.cloudinary.com/${cloud}/${resourceType}/upload`;
  return transforms
    ? `${base}/${transforms}/${cleanPath}`
    : `${base}/${cleanPath}`;
}

export function cloudinaryUrl(
  localPath: string,
  opts?: { width?: number; quality?: string },
): string {
  if (isProjectAssetPath(localPath)) {
    const cloud = requireCloudForProjectAssets();
    return buildCloudinaryMediaUrl(localPath, cloud, opts);
  }

  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;
  if (!cloud) return localPath;

  return buildCloudinaryMediaUrl(localPath, cloud, opts);
}

export function cloudinaryRawUrl(localPath: string): string {
  if (isProjectAssetPath(localPath)) {
    const cloud = requireCloudForProjectAssets();
    return buildCloudinaryRawDeliveryUrl(localPath, cloud);
  }

  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;
  if (!cloud) return localPath;

  return buildCloudinaryRawDeliveryUrl(localPath, cloud);
}

const RAW_EXTENSIONS = /\.(obj|glb|gltf)$/i;

export function cloudinary3dUrl(localPath: string): string {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;
  if (!cloud) return localPath;

  const cleanPath = localPath.startsWith("/") ? localPath.slice(1) : localPath;
  return `https://res.cloudinary.com/${cloud}/raw/upload/${cleanPath}`;
}

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (ABSOLUTE_URL.test(src)) {
    return src;
  }
  return cloudinaryUrl(src, {
    width,
    quality: quality ? String(quality) : undefined,
  });
}
