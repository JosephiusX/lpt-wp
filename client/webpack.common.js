// C:\Users\josep\OneDrive\Desktop\lpt-wp\server\client\webpack.common.js
const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    entry:'./main.jsx',
    output: {
        publicPath: '/',
        clean: true,
        filename: '[name].ini.js',
        chunkFilename: '[id].chunk.js',
        assetModuleFilename: 'assets/[name].[hash][ext]',
        path: path.resolve(__dirname, 'build')
      },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
              },
            {
                test:/\.txt$/i,
                type:'asset/source', // raw-loader
            },
            {
                test:/\.svg$/i,
                type:'asset/inline', // url-loader
            }
        ],
    },
    resolve: {
      extensions: ['.*', '.js', '.jsx'],
    },
}