const path = require('path');
proxy = require('koa-proxy');

module.exports = {
  config: './webpack/dev.config.js',
  content: './public',
  add: (app, middleware, options) => {
    middleware.webpack();
    middleware.content();
    app.use(proxy({
      host:  'https://en.wikipedia.org',
      match: /^\/wikipedia\//,
      map: path => {
        console.log(path)
        return `/wiki${path.substring('/wikipedia'.length)}`;
      }
    }));
  }
}
