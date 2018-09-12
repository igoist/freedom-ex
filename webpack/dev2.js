/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.js');
const webpack = require('webpack');

// console.log(path.resolve(path.resolve(__dirname, '..'), path.resolve('src/', 'index.jsx')));
module.exports = merge(common, {
  devtool: 'inline-source-map',
  // entry: {
  //   index: [
  //     'react-hot-loader/patch',
  //     path.resolve(path.resolve(__dirname, '..'), path.resolve('src/', 'index.jsx'))
  //   ]
  // },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    // host: 'localhost',
    hot: true,
    inline: true,
    port: 3006,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
