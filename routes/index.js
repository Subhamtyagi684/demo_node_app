var express = require('express');
var router = express.Router();
const log = require("../logger")

/* GET home page. */
router.get('/', function(req, res, next) {
  log.error('This is an informational message');
  // log.info({ user: 'john.doe', action: 'login' }, 'User logged in');
  res.render('index', { title: 'Express' });
});

module.exports = router;
