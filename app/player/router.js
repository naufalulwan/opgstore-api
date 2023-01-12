const express = require("express");
const router = express.Router();
const { landingPage, detailPage } = require("./controller");

// router method
router.get("/landing", landingPage);
router.get("/:id/detail", detailPage);

module.exports = router;
