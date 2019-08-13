const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
const ChromeExtensionReloader  = require('webpack-chrome-extension-reloader');

module.exports = {
  entry: {
    popup: './src/static/popup.tsx',
    background: './src/static/background.tsx',
    content: './src/static/content.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
     },
  ]},
  plugins: [
    new HtmlWebpackPlugin({
      excludeAssets: [/background.js|content.js/],
      template: './src/static/index.html'
    }),
    new CopyWebpackPlugin([
      {from:'src/static/images',to:'images'},
      {from:'src/static/manifest.json', to:'manifest.json'}
    ]),
    new HtmlWebpackExcludeAssetsPlugin(),
    new ChromeExtensionReloader(),
  ]
}