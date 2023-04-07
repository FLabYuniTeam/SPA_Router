const express = require('express');
const path = require('path');

const server = express();

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const compiler = webpack(webpackConfig);

server.use(express.static('dist'));
server.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }),
);
server.set('port', 8080);

server.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

server.listen(server.get('port'));
