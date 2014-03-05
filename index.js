module.exports = require('hyperquest')
  .get('http://omahaproxy.appspot.com/all')
  .pipe(require('binary-csv')({ json: true }));