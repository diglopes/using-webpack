const path = require("path");
const common = require("./webpack.common");
const webpackMerge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = webpackMerge(common, {
  mode: "production",
  /**
   * It uses contentHash to avoid caching
   * generating files with different names
   */
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new CleanWebpackPlugin()]
});
