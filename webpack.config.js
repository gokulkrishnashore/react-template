const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const PacktrackerPlugin = require("@packtracker/webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin()],
    usedExports: true,
    sideEffects: true,
  },
  plugins: [
    htmlPlugin,
    new PacktrackerPlugin({
      project_token: "jsr",
      branch: "master",
      upload: true,
      fail_build: true,
    }),
  ],
};
