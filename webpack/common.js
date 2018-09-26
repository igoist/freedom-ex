const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/';
const srcPath = './src';

const webpackConfig = {
  entry: {
    index: [
      'react-hot-loader/patch',
      path.resolve(path.resolve(__dirname, '..'), path.resolve(srcPath, 'index.jsx'))
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(path.resolve(__dirname, '..'), 'dist/'),
    publicPath
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(path.resolve(__dirname, '..'), srcPath)
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(path.resolve(__dirname, '..'), './public/index.html')
    })
  ]
};

module.exports = webpackConfig;
