const express = require("express");
const router = express.Router();
const staysCtrl = require("../controllers/stays");

router.get("/", staysCtrl.index);

module.exports = router;
