var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("newapi", { heading: "Backend API" });
});

module.exports = router;
