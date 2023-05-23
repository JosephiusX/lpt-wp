const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    entry:'./main.jsx',
    output:{
        clean:true,
        filename:'[name].ini.js',
        chunkFilename:'[id].chunk.js',
        assetModuleFilename:'assets/[name].[hash][ext]',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-react'],
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
        ]
    }
}