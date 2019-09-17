const path = require("path");
const common = require("./webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(common, {
  mode: "production",
  /**
   * It uses contentHash to avoid caching
   * generating files with different names
   */
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  }
});
