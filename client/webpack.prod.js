const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const cssMinimizer = require('css-minimizer-webpack-plugin');
const css = require('mini-css-extract-plugin');
const html = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const babelLoader = require('babel-loader');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        chunkIds: 'named',
        usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new cssMinimizer()
        ]
    },
    output: {
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(css|scss)$/i,
                use: [
                    css.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'IMG/[hash].[name][ext]',
                }
            }
        ]
    },
    plugins: [
        new Dotenv(),
        new css({
            filename: '[name].css',
            chunkFilename: '[name].chunk_css.css'
        }),
        new html({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            title: 'Asset Modules',
            minify: false,
            publicPath: '/html'
        })
    ]
});