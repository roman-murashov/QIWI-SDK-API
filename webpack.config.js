const path = require('path');
const webpack = require('webpack');

const libraryName = 'QiwiBillsApi';

module.exports = {
    target: 'node',
    entry: [
        './src'
    ],
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};
