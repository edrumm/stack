const path = require('path');

module.exports = {
  entry: './src/stack.js',
  output: {
    filename: 'stack.js',
    path: path.join(__dirname, './dist')
  }
};
