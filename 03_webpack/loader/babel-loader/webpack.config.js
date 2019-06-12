const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.mjs',
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
        rules: [
            {
                test: /\.mjs$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

};
