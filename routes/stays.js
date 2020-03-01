const express = require("express");
const router = express.Router();
const staysCtrl = require("../controllers/stays");

router.get("/", staysCtrl.index);
router.get("/new", staysCtrl.new);
router.post("/", staysCtrl.create);
router.get("/:id", staysCtrl.show);

module.exports = router;
