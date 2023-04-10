const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // __dirname는 현재 경로를 나타내기 때문에 굳이 경로를 다시 표시할 필요가 없습니다.
    index: path.join(__dirname, '/src/js/index.js'),
  },

  output: {
    filename: 'js/[name].js',
    // 결과물의 해당 패스 아래에 위치하게 됩니다.
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 결과물 패스 아래에서 들어갈 파일이름만 지정합니다.
      filename: 'index.html',
      hash: true,
      showErrors: true,
      chunks: ['index'],
    }),

    new MiniCssExtractPlugin({
      // 결과물 패스 아래에 추가적으로 패스를 넣는 것도 가능합니다.
      filename: 'css/style.css',
    }),
  ],
  devServer: {
    // 모든 경로에 대해 index.html을 제공하도록 webpack dev 서버에 지시하는 방법
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // style-loader를 쓰면 css 파일을 불러오지 않아도 됩니다.
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=img/[name].[ext]?[hash]',
          'image-webpack-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
