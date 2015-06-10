var path = require('path');

module.exports = function(utils, name) {
  utils.read(path.join('frags', 'modelTemplate.js'))
    .then(function(out) {
      utils.write(path.join('models', `${name}.js`), out, { name: name });
    })
};