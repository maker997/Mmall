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

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: PATH.view+'index.html',
            }
        )
    ]

}