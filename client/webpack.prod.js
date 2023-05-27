// C:\Users\josep\OneDrive\Desktop\lpt-wp\server\client\webpack.prod.js
const { merge } = require('webpack-merge'); // Importing merge function from webpack-merge module
const common = require('./webpack.common.js'); // Importing common configuration from webpack.common.js
const path = require('path'); // Importing path module from Node.js
const cssMinimizer = require('css-minimizer-webpack-plugin'); // Importing css-minimizer-webpack-plugin for CSS minification
const css = require('mini-css-extract-plugin'); // Importing mini-css-extract-plugin for extracting CSS into separate files
const html = require('html-webpack-plugin'); // Importing html-webpack-plugin for generating HTML files
const TerserPlugin = require('terser-webpack-plugin'); // Importing terser-webpack-plugin for JavaScript minification
const Dotenv = require('dotenv-webpack'); // Importing dotenv-webpack for loading environment variables
const babelLoader = require('babel-loader'); // Importing babel-loader for transpiling JavaScript using Babel

module.exports = merge(common, {
  mode: 'production', // Setting the mode to production
  devtool: 'source-map', // Generating source maps for better debugging
  optimization: {
    chunkIds: 'named', // Naming chunks based on their names
    usedExports: true, // Eliminating unused exports for smaller bundle size
    minimize: true, // Minimizing the bundled JavaScript and CSS files
    minimizer: [
      new TerserPlugin(), // Using TerserPlugin for JavaScript minification
      new cssMinimizer() // Using css-minimizer-webpack-plugin for CSS minification
    ]
  },
  output: {
    publicPath: '/', // Configuring the public path for the output files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i, // Matching JavaScript and JSX files
        exclude: /node_modules/, // Excluding node_modules directory from transpilation
        use: {
          loader: 'babel-loader', // Using babel-loader for transpiling JavaScript using Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Configuring Babel presets for transpiling
          },
        },
      },
      {
        test: /\.(css|scss)$/i, // Matching CSS and SCSS files
        use: [
          css.loader, // Extracting CSS into separate files using mini-css-extract-plugin
          'css-loader', // Loading CSS files
          'sass-loader' // Loading and transpiling SCSS files to CSS
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|webp)$/i, // Matching image files
        type: 'asset/resource', // Emitting the image files as separate resources
        generator: {
          filename: 'IMG/[hash].[name][ext]', // Configuring the output file name and location for images
        }
      }
    ]
  },
  plugins: [
    new Dotenv(), // Loading environment variables from .env file
    new css({
        filename: '[name].css', // Configuring the output file name for extracted CSS
        chunkFilename: '[name].chunk_css.css' // Configuring the output file name for CSS chunks
    }),
    new html({
        filename: 'index.html', // Configuring the output file name for HTML
        template: path.resolve(__dirname, './public/index.html'), // Configuring the HTML template file path
        title: 'Asset Modules', // Setting the title for the generated HTML
        minify: true, // Disabling HTML minification
        publicPath: '/html'
      })
    ]
});