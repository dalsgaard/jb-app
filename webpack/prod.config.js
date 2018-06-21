const path = require('path');

const common = require('./common.config');

module.exports = Object.assign(common, {
  mode: 'production',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  }
});
