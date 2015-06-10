var path = require('path');

module.exports = function(util, name) {
  util.read(path.join('frags', 'routeTemplate.js'))
    .then(function(out) {
      util.write(path.join('models', `${name}.js`), out, { name: name });
    });
};