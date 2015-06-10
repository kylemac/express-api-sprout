var _ = require('lodash');
var S = require('underscore.string');

var hello = {
  greet: function(req, res) {
    res.send('Here i am, the first route of the api/v1');
  };
};

module.exports = hello;