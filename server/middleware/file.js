/** 上传文件中间件 */
const os = require('os');
const multer = require('multer');

const formLayer = multer({ dest: os.tmpdir() })
  .single('file')
;

exports.formLayer = formLayer;
