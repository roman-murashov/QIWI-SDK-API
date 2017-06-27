var path = require('path');
var webpack = require('webpack');

var libraryName = 'RestV3';

module.exports = {
    entry: [
        './src'
    ],
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'qiwi.lib.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),*/
        new webpack.ProvidePlugin({
            'Promise': 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
            'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        })
    ]
};
