/* eslint-disable */
const express = require('express');
const app = express();

const path = require('path');
// const webpack = require('webpack');
// const WebpackDevMiddleware = require('webpack-dev-middleware');
// const config = require('../webpack/dev2');
const R = require('ramda');
const cors = require('cors')
const fileMW = require('./middleware/file');
// console.log(config);

// app.use(express.static(path.resolve(__dirname, '../public/index2.html')));

// app.use(WebpackDevMiddleware(webpack(config), {
//   historyApiFallback: true
// }));
// api :: ((Request, Response) -> Promise a) -> IO ()
const send = R.curry((res, v) => {
  if (R.isNil(v)) {
    return res.status(404).json({err: '资源未找到'});
  }
  return res.json(v);
});

const api = f => (req, res) => {
  return Promise.resolve(f)
    .then(f => f(req, res))
    .then(send(res))
    // .catch(sendError(res))
  ;
};


app.use(cors());
app.get('/', function(req, res) {
  // res.send('hello world');
  // console.log('fs');
  res.sendFile(path.resolve(__dirname, '../public/index2.html'));
});

app.post('/api/upload', fileMW.formLayer, api((req, res) => {
  const { file } = req;
  // console.log('req: ', req);
  console.log('file: ', file);
  return 'file upload';
}));

const port = 3005;


app.listen(port, () => {
  console.log(path.resolve(__dirname, '../public/index2.html'));
  console.log(`server is running on: ${ port }`);
});
