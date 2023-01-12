const mongoose = require("mongoose");

let voucherSchema = mongoose.Schema(
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
    isFeatured: {
      type: Boolean,
      default: false,
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
    timestamps: true,
  }
);

module.exports = mongoose.model("Voucher", voucherSchema);
