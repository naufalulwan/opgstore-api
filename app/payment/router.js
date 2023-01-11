const express = require("express");
const router = express.Router();
const {
  index,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
  actionStatus,
} = require("./controller");

const { auth, isLoginAdmin } = require("../middleware/auth");

// router middleware
router.use(isLoginAdmin);

// router method
router.get("/", index);
router.get("/create", viewCreate);
router.post("/create", actionCreate);
router.get("/edit/:id", viewEdit);
router.put("/edit/:id", actionEdit);
router.delete("/delete/:id", actionDelete);
router.put("/status/:id", actionStatus);

module.exports = router;
