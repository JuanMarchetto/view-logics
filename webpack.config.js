var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: "source-map",
  externals: {
    react: "react",
  },
};