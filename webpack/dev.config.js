const path = require('path');

const common = require('./common.config');

module.exports = Object.assign(common, {
  mode: 'development',
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  }
});
