var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: __dirname + "/public",
        //在本地目录下的public文件夹导出名为base.js文件
        filename: 'base.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: "./public", //本地服务器的文件夹
        inline: true, //自动刷新
        port: 12345
    }
}
