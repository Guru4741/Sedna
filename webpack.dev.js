const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');


const configureDevServer = () => {
  return {
    contentBase: path.resolve(__dirname, './src'),
    open: true,
    port: 3000,
    liveReload: true,
    hot: true,
    publicPath: '/',
    stats: 'errors-only',
    inline: true,
    watchContentBase: true,
  };
};

module.exports = merge(common, {
  mode: "development",
  devServer: configureDevServer(),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
})