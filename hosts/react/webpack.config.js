const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");


// process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// const webpackConfig = require('react-scripts/config/webpack.config');

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  output: {
    publicPath: "/",
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"]
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        // remote1: 'remote1@http://localhost:3002/remoteEntry.js',
        // remote2: 'remote2@http://localhost:3003/remoteEntry.js',
        // admin: 'admin@http://localhost:3004/_next/static/chunks/remoteEntry.js',
        // vite: 'vite@http://localhost:4173/assets/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: require("./package.json").dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: require("./package.json").dependencies["react-dom"],
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
};


