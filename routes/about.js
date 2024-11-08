var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',  async function(req, res, next) {
  res.render('about',{title:'My name is Leonel and this is my first render project'});
});

module.exports = router;
