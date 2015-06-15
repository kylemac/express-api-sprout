var path = require('path');

module.exports = function(utils, name) {
  return utils.url.read(path.join('templates', 'routes.js'))
    .then(function(out) {
      return utils.target.write(path.join('models', `${name}.js`), out, { name: name });
    });
};