var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", path.join(__dirname, 'src/main.js')],// 指定打包的入口文件
    output: {
        path: path.join(__dirname, 'dist'),// 指定出口文件所输出的位置
        filename: 'bundle.js'// 指定出口文件的文件名称
    },
    module: {
        rules: [
            {//处理.css文件
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {//处理.scss文件
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']

            },
            {//处理.less文件
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {//处理文件
                test: /\.(jpe|jpeg|png|bmp|gif|svg)$/,
                use: ['url-loader?limit=4096']
            },
            {//处理字体图标
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader?limit=4096']
            },
            {//处理多媒体
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
                use: ['url-loader?limit=4096']
            },
            {//处理.js
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/ //排除node_modules文件夹中的js文件
            },
            {//处理.vue
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    devServer: {// --open --port 8888 --hot
        open: true,// 自动打开浏览器
        port: 8888,// 指定端口
        hot: true, // 开启热部署
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),// 使用webpack的热更新插件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),// 指定插件要管理的html文件
            filename: 'index.html'// 用模板生成的文件名
        }),
    ]
};
