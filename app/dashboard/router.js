const express = require("express");
const router = express.Router();
const { index } = require("./controller");

// router method
router.get("/", index);

module.exports = router;
