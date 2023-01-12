const Player = require("./model");
const Voucher = require("../voucher/model");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const voucher = await Voucher.find()
        .populate("category")
        .select("_id name status category thumbnail");

      res.status(200).json({
        message: "Welcome to the landing page",
        data: voucher,
      });
    } catch (err) {
      res.status(500).json({ message: err.message || "Internal Server Error" });
    }
  },
  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const voucher = await Voucher.findOne({ _id: id })
        .populate("category")
        .populate("nominals")
        .populate("user", "_id name phoneNumber");

      if (!voucher) {
        return res.status(404).json({
          message: "Game voucher not found",
        });
      }

      res.status(200).json({
        message: "Welcome to the detail page",
        data: voucher,
      });
    } catch (err) {
      res.status(500).json({ message: err.message || "Internal Server Error" });
    }
  },
};
