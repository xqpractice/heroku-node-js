require('babel-register');
const http = require('http');
const webpack = require('webpack');
const express = require('express');
const routes = require('./routes');
const webpackConfig = require('./webpack/webpack.dev.config');

const app = express();
const compiler = webpack(webpackConfig);

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 9000);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('/', express.static('public'));
app.use(routes);

app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://' + app.get('host') + ':' + app.get('port'));
});
