const HtmlWebpackPlugin = require('html-webpack-plugin');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const path = require('path');

const pkg = require('./package.json');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    ],
  },
  plugins: [
    new FederatedTypesPlugin({
      federationConfig: {
        name: 'remote1',
        filename: 'remoteEntry.js',
        exposes: {
          './remote1': './src/App',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: pkg.dependencies.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: pkg.dependencies['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            requiredVersion: pkg.dependencies['react-router-dom'],
          },
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
