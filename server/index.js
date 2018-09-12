/* eslint-disable */
const express = require('express');
const app = express();

const path = require('path');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack/dev2');
// console.log(config);

app.use(express.static(path.resolve(__dirname, '../public/index2.html')));

app.use(WebpackDevMiddleware(webpack(config), {
  historyApiFallback: true
}));


app.get('/', function(req, res) {
  // res.send('hello world');
  // console.log('fs');
  res.sendFile(path.resolve(__dirname, '../public/index2.html'));
});


app.listen(3005, () => {
  console.log(path.resolve(__dirname, '../public/index2.html'));
  console.log(`server is running on: ${ 3005}`);
});
