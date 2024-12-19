/** @type {import('webpack').Configuration} */

const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

const BUILD_ROOT = path.join(__dirname, "./dist");
const SRC_ROOT = path.join(__dirname, "./src");

module.exports = {
  context: SRC_ROOT,
  entry: path.resolve("server", "index.ts"),
  mode: "development",
  externals: [nodeExternals()],
  output: {
    filename: "server.cjs",
    path: BUILD_ROOT,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          targets: "defaults",
          presets: [["@babel/preset-env"]],
        },
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
        },
      },
    ],
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
