const express = require("express");
const router = express.Router();

const { viewSignin, actionSignin, actionLogout } = require("./controller");

// router method
router.get("/logout", actionLogout);
router.get("/", viewSignin);
router.post("/", actionSignin);

module.exports = router;
