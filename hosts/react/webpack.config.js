const HtmlWebpackPlugin = require("html-webpack-plugin");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const path = require("path");

const pkg = require("./package.json");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    port: 3001
  },
  output: {
    publicPath: "auto"
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
      }
    ]
  },
  plugins: [
    new FederatedTypesPlugin({
      federationConfig: {
        name: "host",
        filename: "remoteEntry.js",
        remotes: {},
        shared: {
          react: {
            singleton: true,
            requiredVersion: false, //pkg.dependencies.react,
            eager: true,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: false, //pkg.dependencies['react-dom'],
            eager: true,
          },
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};


