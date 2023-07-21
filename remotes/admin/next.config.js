const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "admin",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./App": "./src/pages/index"
        },
        shared: {}
      })
    );

    return config;
  }
};

module.exports = nextConfig;
