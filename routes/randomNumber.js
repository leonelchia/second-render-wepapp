var express = require('express');
const { title } = require('process');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  res.render('randomNumber',{title: randomNumber});
});

module.exports = router;
