const express = require("express");
const router = express.Router();
const staysCtrl = require("../controllers/stays");

router.get("/", staysCtrl.index);
router.get("/new", staysCtrl.new);
router.post("/", staysCtrl.create);

module.exports = router;
