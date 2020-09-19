//  Pengganti proxy properties di package.json dikarenakan deprecated

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google'],
    createProxyMiddleware({
      target: 'https://woro-api.herokuapp.com/',
    })
  );
};
