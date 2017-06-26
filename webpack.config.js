var path = require('path');

var libraryName = 'RestV3';

module.exports = {
    entry: [
        'babel-polyfill',
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
    }
};
