const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        remotes: {
          // vite: `promise import("vite@http://localhost:4000/vite2/assets/remoteEntry.js")`
        },
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      }),
    )
    return config;
  }
}

module.exports = nextConfig
