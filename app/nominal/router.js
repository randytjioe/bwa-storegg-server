var express = require("express");
const {
  index,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
} = require("./controller");
var router = express.Router();

router.get("/", index);
router.get("/create", viewCreate);
router.get("/edit/:id", viewEdit);
router.put("/edit/:id", actionEdit);
router.delete("/delete/:id", actionDelete);
router.post("/create", actionCreate);

module.exports = router;
