const Bank = require("./model");

const bankProvider = ["BNI", "BRI", "BCA", "BSI", "BNI Syariah", "Credit Card"];

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };

      const bank = await Bank.find();

      res.render("admin/bank/view_bank", {
        bank,
        alert,
        name: req.session.user.name,
        title: "- Bank",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/bank/create", {
        bankProvider,
        name: req.session.user.name,
        title: "- Add Bank",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { name, nameBank, accountNumber } = req.body;

      let bank = await Bank({ name, nameBank, accountNumber });
      await bank.save();

      req.flash("alertMessage", "Success Add Bank Data");
      req.flash("alertStatus", "success");

      res.redirect("/bank");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req.params;

      const bank = await Bank.findOne({
        _id: id,
      });
      res.render("admin/bank/edit", {
        bank,
        bankProvider,
        name: req.session.user.name,
        title: "- Edit Bank",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, nameBank, accountNumber } = req.body;

      await Bank.findOneAndUpdate(
        {
          _id: id,
        },
        { name, nameBank, accountNumber }
      );

      req.flash("alertMessage", "Success Edit Bank");
      req.flash("alertStatus", "success");

      res.redirect("/bank");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;

      await Bank.findOneAndRemove(
        {
          _id: id,
        },
        { new: true }
      );

      req.flash("alertMessage", "Success Delete Bank");
      req.flash("alertStatus", "info");

      res.redirect("/bank");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
    }
  },
};
