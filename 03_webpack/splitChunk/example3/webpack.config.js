const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    entry: {
        english: "./src/english.js",
        math: "./src/math.js",
        chinese: "./src/chinese.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    optimization: {
        minimize: false,
        splitChunks: {
            automaticNameDelimiter: '-',
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    test:/[\\/](class\-a|class\-b|1class\-c)/,
                    minChunks: 2,
                    // maxAsyncRequests:1,
                    // maxInitialRequests: 2, // The default limit is too small to showcase the effect
                    minSize: 0 ,// This is example is too small to create commons chunks
                    reuseExistingChunk: true,
                    name:true
                }
            }
        }
    },
};
