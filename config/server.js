const http = require('http');
const morgan = require('morgan');
const express = require('express');
const routes = require('./routes');

const app = express();

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 9000);

app.use(morgan('combined'));
app.use('/', express.static('public'));
app.use(routes);

app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://' + app.get('host') + ':' + app.get('port'));
});
