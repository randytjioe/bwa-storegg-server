var express = require("express");
const {
  index,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
  actionStatus,
} = require("./controller");
const multer = require("multer");
const os = require("os");
const { isLoginAdmin } = require("../middleware/auth");
var router = express.Router();
router.use(isLoginAdmin);
router.get("/", index);
router.get("/create", viewCreate);
router.get("/edit/:id", viewEdit);
router.put(
  "/edit/:id",
  multer({ dest: os.tmpdir() }).single("image"),
  actionEdit
);
router.delete("/delete/:id", actionDelete);
router.post(
  "/create",
  multer({ dest: os.tmpdir() }).single("image"),
  actionCreate
);
router.put("/status/:id", actionStatus);

module.exports = router;
