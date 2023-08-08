const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: {
    filename: 'static/chunks/[name].js',
    libraryTarget: 'umd',
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "admin",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./App": "./src/pages/nextjs/index"
        },
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  }
};

module.exports = nextConfig;
