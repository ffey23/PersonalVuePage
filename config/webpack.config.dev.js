const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
require('babel-polyfill')
module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    port: 3000,
    publicPath: '/dist/',
    historyApiFallback: true
  },
  plugins: [new VueLoaderPlugin()]
}
