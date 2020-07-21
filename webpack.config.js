const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: 'app.js',
    library: 'app',
  },
};
