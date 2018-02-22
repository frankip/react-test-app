// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path')

// Import html webpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js')
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, "app.js"),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js"
  },
  // Tell webpack to use html plugin -> ADDED IN THIS STEP
  // index.html is used as a template in which it'll inject bundled app.
  plugins: [
      new HtmlWebpackPlugin({
          template: path.join(paths.SRC, 'index.html'),
      }),
  ],
  // Dev server configuration
  // Now it uses the "src" folder as the starting point
//   devServer: {
//     contentBase: paths.SRC
//   }
};
