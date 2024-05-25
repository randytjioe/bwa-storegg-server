var express = require("express");
const { viewSignin, actionSignin, actionLogout } = require("./controller");

var router = express.Router();

router.get("/", viewSignin);
router.post("/", actionSignin);
router.get("/logout", actionLogout);
module.exports = router;
