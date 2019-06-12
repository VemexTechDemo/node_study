const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        libraryTarget: "umd2",
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: 'postcss-loader'  // 将 CSS 编译处理
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
        }]
    },
    optimization: {
        minimize: false,
        splitChunks: {
            automaticNameDelimiter: '-',
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test:/[\\/]node_modules[\\/]/,
                    minChunks: 1,
                    // maxAsyncRequests:1,
                    // maxInitialRequests: 2, // The default limit is too small to showcase the effect
                    minSize: 0 ,// This is example is too small to create commons chunks
                    reuseExistingChunk: true,
                    name:"vendor"
                }
            }
        }
    },
};
