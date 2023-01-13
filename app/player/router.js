const express = require("express");
const router = express.Router();
const {
  landingPage,
  detailPage,
  category,
  checkout,
  history,
  historyDetail,
  dashboard,
  profile,
  editProfile,
} = require("./controller");
const { isAuth } = require("../middleware/auth");
const multer = require("multer");
const os = require("os");

// router method
router.get("/landing", landingPage);
router.get("/:id/detail", detailPage);
router.get("/category", category);
router.post("/checkout", isAuth, checkout);
router.get("/history", isAuth, history);
router.get("/history/:id/detail", isAuth, historyDetail);
router.get("/dashboard", isAuth, dashboard);
router.get("/profile", isAuth, profile);
router.put(
  "/profile",
  isAuth,
  multer({ dest: os.tmpdir() }).single("image"),
  editProfile
);

module.exports = router;
