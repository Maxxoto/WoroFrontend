//  Pengganti proxy properties di package.json dikarenakan deprecated

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google'],
    createProxyMiddleware({
      target:
        process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '',
    })
  );
};
