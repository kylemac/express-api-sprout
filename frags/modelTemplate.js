var mongoose = require('../config/config').dbConfig();
var Schema = mongoose.Schema;

var <%= S.camelize(name) %> = new Schema({

});

module.exports = module.model('<%= S.classify(name) %>', <%= S.camelize(name) %>); 