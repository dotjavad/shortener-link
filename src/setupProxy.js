const proxy = require('http-proxy-middleware');

module.exports = function (app) {

    app.use('/api/v1/shorten', proxy({
        target: 'https://cleanuri.com',
        changeOrigin: true,
    }));

    app.use('/api/links/', proxy({
        target: 'https://rel.ink',
        changeOrigin: true,
    }));

};