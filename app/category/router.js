const express = require("express");
const router = express.Router();
const {
  index,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
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

module.exports = router;
