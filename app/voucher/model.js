const mongoose = require("mongoose");

let nominalSchema = mongoose.Schema(
  {},
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Voucher", nominalSchema);
