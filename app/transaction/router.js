const express = require("express");
const router = express.Router();
const { index, actionStatus } = require("./controller");

const { isLoginAdmin } = require("../middleware/auth");

// router middleware
router.use(isLoginAdmin);

// router method
router.get("/", index);
router.put("/status/:id", actionStatus);

module.exports = router;
