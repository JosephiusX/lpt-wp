const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const cssMinimizer = require('css-minimizer-webpack-plugin')
const css = require('mini-css-extract-plugin')
const html = require('html-webpack-plugin')

const Dotenv = require('dotenv-webpack');

module.exports = merge(common,{
    mode:'production',
    devtool: 'source-map',
    optimization:{
        chunkIds:'named',// default to 'deterministic' under prod. mode
        usedExports: true, // Enable tree shaking
        minimizer:[
            '...',
            new cssMinimizer()
        ]
    },
    output:{
        publicPath: '/',
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                //use:['style-loader','css-loader']
                use:[
                  {
                    loader: css.loader,
                    options: { /* options here */ }
                  },
                  'css-loader'
                ]
            },
            {
                test:/\.scss$/i,
                use:[
                  {
                    loader: css.loader,
                    options: { /* options here */ }
                  },
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test:/\.(jpg|png|jpeg|gif|webp)$/i,
                type:'asset/resource', // file-loader
                generator:{
                    filename:'IMG/[hash].[name][ext]',
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            }
        ]
    },
    plugins:[
        new Dotenv(),
        new css({
            filename:'[name].css',
            chunkFilename:'[name].chunk_css.css'
        }),
        new html({
            filename:'index.html',
            template:'./template/tpl.html',
            title:'Asset Modules',
            minify:false,
            favicon:'./assets/favicon.ico',
            publicPath:'/html'
        })
    ]
})