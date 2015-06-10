var path = require('path');

module.exports = function(utils, name) {
  utils.read(path.join('frags', 'routeTemplate.js'))
    .then(function(out) {
      utils.write(path.join('models', `${name}.js`), out, { name: name });
    });
};