const path = require("path");

module.exports = {
  mode: "development",
  // The entry point file path
  entry: "./src/index.js",
  // The output config
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    /* Everytime the webpack came across a file that matches with the 
       regex it uses the loaders inserted into the array.
    */
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
