var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');//抽离css文件
var OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');//压缩抽离的css文件

module.exports = {
    entry: {
        main: ["babel-polyfill", path.join(__dirname, 'src/main.js')],// 指定打包的入口文件
        vendors: ['vue', 'axios', 'vue-router'],//抽离第三方包//element-ui有单独优化方案（按需加载）
    },
    output: {
        path: path.join(__dirname, 'dist'),// 指定出口文件所输出的位置
        filename: 'js/[name]-[hash:8].js',// 指定出口文件的文件名称

    },
    module: {
        rules: [
            {//处理.css文件
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({//抽离css文件
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    publicPath: '../'//解决图片路径的问题
                })
            },
            {//处理.scss文件
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({//抽离scss文件
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                })
            },
            {//处理.less文件
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({//抽离less文件
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader'],
                    publicPath: '../'
                })
            },
            {//处理图片
                test: /\.(jpe|jpeg|png|bmp|gif|svg)$/,
                use: ['url-loader?limit=4096&name=images/[name]-[hash:8].[ext]']
            },
            {//处理字体图标
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader?limit=4096&name=fonts/[name]-[hash:8].[ext]']
            },
            {//处理多媒体
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
                use: ['url-loader?limit=4096&name=media/[name]-[hash:8].[ext]']
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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),// 指定插件要管理的html文件
            filename: 'index.html',// 用模板生成的文件名
            minify: {//压缩html代码，一般只配置这三项
                collapseWhitespace: true, //合并空白字符
                removeComments: true, //移除注释
                removeAttributeQuotes: true//移除属性上的引号
            }
        }),
        new CleanWebpackPlugin(['dist']),//指定要删除哪一个目录
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',//指定抽离第三方包的入口名称
            filename: 'js/vendors-[hash:8].js' //抽离出的公共模块的名称
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false//移除警告
            }
        }),
        new webpack.DefinePlugin({//设置为产品上线环境，进一步压缩代码
            'process.env.NODE_ENV': '"production"'
        }),
        new ExtractTextWebpackPlugin('css/style-[hash:8].css'),//抽取css文件的插件，抽取css到style.css文件中
        new OptimizeCssAssetsWebpackPlugin(),//压缩抽离的css文件插件
    ]
};
