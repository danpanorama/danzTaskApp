var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'daniel' });
});
router.get('/s', function(req, res, next) {
  res.json( { title: 'daniel' });
});
module.exports = router;
