const mongoose = require("mongoose");

let nominalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Game name must be entered! "],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    thumbnail: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    nominals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nominal",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Voucher", nominalSchema);
