var express = require('express');
var routes = express.Router();

var hello = require('routes/hello');

router.route('/')
  .get(hello.greet);

module.exports = router;