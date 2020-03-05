const express = require("express");
const router = express.Router();
const regionsCtrl = require("../controllers/regions");


router.get("/", regionsCtrl.showRegionsPage);

module.exports = router;