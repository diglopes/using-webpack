const path = require("path");

module.exports = {
  mode: "development",
  // The entry point file path
  entry: "./src/index.js",
  // The output config
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
