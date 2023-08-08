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
        admin: "admin@http://localhost:3002/remoteEntry.js",
      },
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
        next: {
          singleton: true,
          requiredVersion: false, //pkg.dependencies['react-dom'],
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
};


