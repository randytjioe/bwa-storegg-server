var express = require("express");
const multer = require("multer");
const os = require("os");
var router = express.Router();
const { signup, signin } = require("./controller");

router.post("/signup", multer({ dest: os.tmpdir() }).single("image"), signup);
router.post("/signin", signin);

module.exports = router;
