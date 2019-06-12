const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src/another.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        libraryTarget: "umd2",
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    minChunks: 1,
                    chunks: "all"
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `manifest.${entrypoint.name}`
        }
    }
};
