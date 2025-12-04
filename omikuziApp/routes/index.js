var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const fortunes = ["大吉", "中吉", "小吉", "凶"];
  const num = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[num];

  res.render('index', { fortune: fortune });
});

module.exports = router;
