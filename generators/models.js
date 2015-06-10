var path = require('path');

module.exports = function(utils, name) {
  return utils.read(path.join('frags', 'modelTemplate.js'))
    .then(function(out) {
      return utils.write(path.join('models', `${name}.js`), out, { name: name });
    })
};