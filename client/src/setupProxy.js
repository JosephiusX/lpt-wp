// C:\Users\josep\OneDrive\Desktop\lpt-wp\server\client\src\setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware(["/api", "/auth/google", "/auth/google/callback" ], {
    target: 'http://localhost:5000'
  }));
};