const mongoose = require("mongoose");

let paymentSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "Type payment is required"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    banks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);
