var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  //console.log(__dirname);

  res.json({ test: 111 });
  return;
});

router.get("/test", function(req, res, next) {
  //console.log(__dirname);

  res.json({ test: 222 });
  return;
});

module.exports = router;
