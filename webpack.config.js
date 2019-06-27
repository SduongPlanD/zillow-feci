var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry: {
  //   app: './src/index.js',
  //   style: './src/style.scss'
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};