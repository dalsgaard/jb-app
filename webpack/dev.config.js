const path = require('path');

const common = require('./common.config');

module.exports = Object.assign(common, {
  mode: 'development',
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve('link_modules'), path.resolve('node_modules'), 'node_modules']
  }
});
