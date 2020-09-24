const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
    target: 'http://localhost:4000',
    changeOrigin: true, // needed for virtual hosted sites меняет заголовки доступа для локальных адресов
    pathRewrite: {
        '^/api/*': '/', // rewrite path
    }
}

module.exports = function (app) {
    app.use('/api', createProxyMiddleware(options))
}
