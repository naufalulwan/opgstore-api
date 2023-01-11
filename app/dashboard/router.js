const express = require("express");
const router = express.Router();
const { index } = require("./controller");
const { isLoginAdmin } = require("../middleware/auth");

// router middleware
router.use(isLoginAdmin);

// router method
router.get("/", index);

module.exports = router;
