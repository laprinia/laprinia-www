const VIDEO_EXTENSIONS = /\.(mp4|mov|webm)$/i;

export function cloudinaryUrl(
  localPath: string,
  opts?: { width?: number; quality?: string },
): string {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;
  if (!cloud) return localPath;

  const isVideo = VIDEO_EXTENSIONS.test(localPath);
  const resourceType = isVideo ? "video" : "image";

  const transforms = [
    "f_auto",
    `q_${opts?.quality ?? "auto"}`,
    opts?.width ? `w_${opts.width}` : null,
  ]
    .filter(Boolean)
    .join(",");

  const cleanPath = localPath.startsWith("/") ? localPath.slice(1) : localPath;

  return `https://res.cloudinary.com/${cloud}/${resourceType}/upload/${transforms}/${cleanPath}`;
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
