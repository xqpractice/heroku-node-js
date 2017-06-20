const path = require('path');
const controllerPath = path.resolve(__dirname, '../src/js/controllers');

module.exports = {
  controllerPath: process.env.NODE_ENV == 'production' ? path.resolve(__dirname, '../lib/js/controllers') : controllerPath
};
