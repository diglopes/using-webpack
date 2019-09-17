const path = require("path");
const common = require("./webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(common, {
  mode: "development",
  // The output config
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
});
