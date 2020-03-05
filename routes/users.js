const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

router.get('/', function(req, res, next) {
  res.send('A place for users');
});

router.get("/:id", isLoggedIn, usersCtrl.show);
router.post("/:id", isLoggedIn, usersCtrl.createAlias);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
