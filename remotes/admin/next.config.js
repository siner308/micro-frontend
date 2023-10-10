const NextFederationPlugin = require("@module-federation/nextjs-mf");
const pkg = require("./package.json");

/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "admin",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./admin": "./src/pages/admin/index"
        },
        shared: {
          next: {
            singleton: true,
            requiredVersion: pkg.dependencies.next,
            eager: true,
          },
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
