const path = require("path");
const common = require("./webpack.common");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = webpackMerge(common, {
  mode: "development",
  // The output config
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"] // <-- Run order
      }
    ]
  }
});
