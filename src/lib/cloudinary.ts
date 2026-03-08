const VIDEO_EXTENSIONS = /\.(mp4|mov|webm)$/i;
const MAX_CLOUDINARY_WIDTH = 3200;

export function cloudinaryUrl(
  localPath: string,
  opts?: { width?: number; quality?: string },
): string {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;
  if (!cloud) return localPath;

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

export function cloudinaryRawUrl(localPath: string): string {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;
  if (!cloud) return localPath;

  const cleanPath = localPath.startsWith("/") ? localPath.slice(1) : localPath;
  const isVideo = VIDEO_EXTENSIONS.test(localPath);
  const resourceType = isVideo ? "video" : "image";
  const isAnimatedWebp = /\.webp$/i.test(localPath);
  const transforms = isAnimatedWebp ? "fl_animated" : "";

  const base = `https://res.cloudinary.com/${cloud}/${resourceType}/upload`;
  return transforms ? `${base}/${transforms}/${cleanPath}` : `${base}/${cleanPath}`;
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
  return cloudinaryUrl(src, {
    width,
    quality: quality ? String(quality) : undefined,
  });
}
