/** @type {import('next').NextConfig} */
const cloudinaryCloud =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD || process.env.CLOUDINARY_CLOUD_NAME;

const nextConfig = {
  reactStrictMode: true,
  ...(cloudinaryCloud
    ? { env: { NEXT_PUBLIC_CLOUDINARY_CLOUD: cloudinaryCloud } }
    : {}),
  images: {
    loader: "custom",
    loaderFile: "./src/lib/cloudinary.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    qualities: [10, 75],
  },

  compiler: {
    styledComponents: true,
  },

  turbopack: {},

  webpack: (config, { dev, isServer }) => {
    config.cache = {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    };

    if (process.env.ANALYZE === "true") {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: isServer
            ? "../analyze/server.html"
            : "./analyze/client.html",
        }),
      );
    }

    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
      };
    }

    if (!dev) {
      config.cache = {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;
