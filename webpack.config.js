const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src', './js/index.js'),
  },

  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    static: './dist',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      hash: true,
      showErrors: true,
      chunks: ['index'],
    }),

    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),
    new MiniCssExtractPlugin({
      filename: './css/normalize.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          'file-loader?name=img/[name].[ext]?[hash]',
          'image-webpack-loader',
        ],
      },
    ],
  },
};
