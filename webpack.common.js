module.exports = {
  // The entry point file path
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },

  module: {
    /* Everytime the webpack came across a file that matches with the 
       regex it uses the loaders inserted into the array.
    */
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};
