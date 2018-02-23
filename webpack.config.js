// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path')

// Import html webpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js')
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, "main.js"),
  output: {
    path: paths.DIST,
    filename: "main.bundle.js"
  },
  // Tell webpack to use html plugin -> ADDED IN THIS STEP
  // index.html is used as a template in which it'll inject bundled app.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html"),
    }),
    new ExtractTextPlugin('style.bundle.css'),
  ],
  // Loaders configuration -> ADDED IN THIS STEP
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader",],
      },
      // CSS loader to CSS files -> ADDED IN THIS STEP
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader",
        }),
      }
    ],
  },
  // Enable importing JS files without specifying their's extenstion -> ADDED IN THIS STEP
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
