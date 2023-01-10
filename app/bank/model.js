const mongoose = require("mongoose");

let bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Owner's name is required!"],
    },
    nameBank: {
      type: String,
      require: [true, "Bank name is required!"],
    },
    accountNumber: {
      type: String,
      require: [true, "Account number is required!"],
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Bank", bankSchema);
