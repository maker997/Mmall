const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
    image: path.join(__dirname,'src/image/'),
    page: path.join(__dirname,'src/page/'),
    view: path.join(__dirname,'src/view/'),
    ouput: path.join(__dirname,'dist')
};

module.exports = {
    
    entry: {
        index: PATH.page+ 'index/index.js',
        login: PATH.page+'login/index.js'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },

    mode: 'development',

    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true,
                        }
                    }
                ],
            },
        ],
    },

    /*
    * 多个 js文件都引用一个通用的js文件,这样造成用户多次下载个共同的 js 文件
    * 做成一个 js 文件,让浏览器下载一次,作为通用文件去引用
    */
    optimization: {
        splitChunks:{
            chunks: 'all'
        },
        runtimeChunk: false,
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: PATH.view+'index.html',
            }
        ),
    ],

    // 导入外部的库
    externals: {
        jquery: 'jQuery'
    }

}