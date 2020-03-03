const express = require("express");
const router = express.Router();
const staysCtrl = require("../controllers/stays");

router.get("/", staysCtrl.index);
router.get("/new", staysCtrl.new);
router.post("/", staysCtrl.create);
router.get("/:id", staysCtrl.show);
router.delete("/", isLoggedIn, staysCtrl.delete);

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}