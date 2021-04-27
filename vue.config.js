let proxyObj = {}
//代理所有'/'
proxyObj['/'] = {
    //websocket
    ws: false,
    //目标地址
    target: 'http://xbz.com',
    //发送请求头host会被设置成target
    changeOrigin: true,
    //不重写请求地址
    pathRewrite: {
        '^/': '/'
    }

}

proxyObj['/ws'] = {
    //websocket
    ws: true,
    //目标地址
    target: 'ws://localhost:8859',
}


module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj,
    }
}
