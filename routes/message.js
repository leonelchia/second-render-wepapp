var express = require('express');
const { title } = require('process');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.render('message',{title:'Hello Welcome to my practice session thank you surporting this journey of mine'});
});

module.exports = router;
