const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/proxy',
        createProxyMiddleware({
            target: 'https://raw.githubusercontent.com',
            changeOrigin: true,
            pathRewrite: {
                '^/proxy': '', // Xóa tiền tố "/proxy" khỏi URL
            },
        })
    );
};
