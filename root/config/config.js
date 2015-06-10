var mongoose = require('mongoose');

// Database config data
const database = {
  dbUri: "mongodb://localhost:27017/"
};

// JWT secret
const jwtConf = {
  secret: "thisisasuculentosecret"
};

// Server config data
const server = {
  port: process.env.PORT || 3000;
};

module.exports.serverConf = server;

// Server config
module.exports.serverConfig = function(app, bParser, morgan) {
  app.use(bParser.urlencoded({ extended: true })
  app.use(bParser.json());
  app.use(bParser.text());
  app.use(bParser.raw());

  app.use(morgan('dev'));

  app.set('secret', jwtConf.secret);
};

// DB config
module.exports.dbConfig = function() {
  mongoose.connect(database.dbUri);
  
  var db = mongoose.connection

  db.once('open', function() {
    console.log(`db opened on ${data.dbUri}`);
  });

  db.on('error', function(err) {
    console.log(`Error: ${err}`);
  });

  return mongoose;
};