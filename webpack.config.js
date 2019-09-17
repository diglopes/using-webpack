const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // The entry point file path
  entry: "./src/index.js",
  // The output config
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    /* Everytime the webpack came across a file that matches with the 
       regex it uses the loaders inserted into the array.
    */
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"] // <-- Run order
      }
    ]
  }
};
