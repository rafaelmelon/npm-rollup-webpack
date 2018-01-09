const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/strings.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-bundle.js'
    },
    module: {
        rules: [

        ]
    },
    plugins: [

    ]
}