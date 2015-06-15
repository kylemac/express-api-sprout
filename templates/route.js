var <%= S.classify(name) %> = require('../models/<%= S.trim(name) %>');

var _ = require('lodash');
var S = require('underscore.string');

var <%= S.trim(name).decapitalize() %> = {
  // your route here
};

module.exports = <%= S.trim(name).decapitalize() %>;