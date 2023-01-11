const Category = require("../category/model");
const Voucher = require("../voucher/model");
const Player = require("../player/model");
const Transaction = require("../transaction/model");

module.exports = {
  index: async (req, res) => {
    try {
      const category = await Category.countDocuments();
      const voucher = await Voucher.countDocuments();
      const player = await Player.countDocuments();
      const transaction = await Transaction.countDocuments();

      res.render("admin/dashboard/view_dashboard", {
        name: req.session.user.name,
        title: "",
        count: {
          category,
          transaction,
          voucher,
          player,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
