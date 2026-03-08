/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD
    ? {
        loader: "custom",
        loaderFile: "./src/lib/cloudinary.ts",
      }
    : {
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
