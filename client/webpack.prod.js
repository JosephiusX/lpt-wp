const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
//const path = require('path')
const cssMinimizer = require('css-minimizer-webpack-plugin')
const css = require('mini-css-extract-plugin')
const html = require('html-webpack-plugin')

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
        publicPath:'/orange/'
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                //use:['style-loader','css-loader']
                use:[css.loader,'css-loader']
            },
            {
                test:/\.scss$/i,
                use:[css.loader,'css-loader','sass-loader']
            },
            {
                test:/\.(jpg|png|jpeg|gif)$/i,
                type:'asset/resource', // file-loader
                generator:{
                    filename:'IMG/[hash].[name][ext]',
                    publicPath:'/apple/',
                    outputPath:'apple/'
                }
            },
        ]
    },
    plugins:[
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