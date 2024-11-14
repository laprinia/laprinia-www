/** @type {import('next').NextConfig} */
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  compiler: {
    styledComponents: {
      displayName: process.env.NODE_ENV !== "production",
      ssr: true,
      minify: true,
    },
  },

  webpack: (config, { dev, isServer }) => {
    config.cache = {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    };

    if (process.env.ANALYZE === "true") {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          reportFilename: isServer
            ? "../analyze/server.html"
            : "./analyze/client.html",
        }),
      );
    }

    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 30,
        minSize: 30000,
      };
    }

    config.output = {
      ...config.output,
      ecmaVersion: "latest",
    };

    config.optimization.minimize = true;
    config.optimization.minimizer = [
      {
        apply: (compiler) => {
          const TerserPlugin = require("terser-webpack-plugin");
          new TerserPlugin({
            terserOptions: {
              format: {
                comments: false,
              },
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
            },
            extractComments: false,
          }).apply(compiler);
        },
      },
    ];

    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), microphone=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
