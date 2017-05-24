// =============================================================================
// Webapack Config
// =============================================================================
// @see  https://webpack.js.org/configuration/


const webpack = require('webpack');
const chalk = require('chalk');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const PORT = 8080;

let sourceDirectory = 'src';

let debug = true;
let devtool = 'inline-source-map';
let entry = [ path.join(__dirname, sourceDirectory) ];


/**
 * App build config.
 *
 * @type {object}
 */
module.exports = {

    devtool,
    entry,

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/',
    },

    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        port: PORT,
        stats: {
            chunks: false
        },
    },

    target: 'web',

    resolve: {
        modules: ['node_modules', sourceDirectory],
        extensions: ['.js', '.jsx'],
    },

    module : {
        rules : [
            {
                test: /\.js(x)?$/,
                include: [
                    path.join(__dirname, sourceDirectory),
                ],
                exclude: [
                    path.join(__dirname, sourceDirectory + '/vendors'),
                    /(node_modules|bower_components)/,
                ],
                loaders: ['babel-loader'],
            },
        ],
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

};
