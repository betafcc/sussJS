const path = require('path');
const webpack = require('webpack');

const PRODUCTION  = process.env.NODE_ENV === 'production';
const DEVELOPMENT = process.env.NODE_ENV === 'development';

const devtool =
    PRODUCTION  ? false :
    DEVELOPMENT ? 'source-map' :
    false;

const plugins =
    PRODUCTION  ? [
        new webpack.optimize.UglifyJsPlugin(),
    ] :
    DEVELOPMENT ? [] :
    [];


module.exports = {
    devtool,
    plugins,
    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
        filename: 'index.js',
        library: 'suss',
        libraryTarget: 'umd',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            { test: /\.ts$/, use: ['babel-loader', 'ts-loader'] },
            { test: /\.js$/, use: 'babel-loader' },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
};
