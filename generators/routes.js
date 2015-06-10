var path = require('path');

module.exports = function(utils, name) {
  return utils.src.read(path.join('frags', 'routeTemplate.js'))
    .then(function(out) {
      return utils.target.write(path.join('models', `${name}.js`), out, { name: name });
    });
};