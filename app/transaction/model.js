const mongoose = require("mongoose");

let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "Game name is required"] },
      category: { type: String, require: [true, "Category is required"] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "Coin name is required"] },
      coinQuantity: {
        type: Number,
        require: [true, "Coin quantity is required"],
      },
      price: { type: Number },
    },

    historyPayment: {
      name: { type: String, require: [true, "Name is required"] },
      type: { type: String, require: [true, "Type of payment is required"] },
      bankName: { type: String, require: [true, "Bank name is required"] },
      accountNumber: {
        type: String,
        require: [true, "Account number is required"],
      },
    },

    name: {
      type: String,
      require: [true, "Name is required"],
      maxLength: [50, "Name cannot be more than 50 characters"],
      minLength: [3, "Name cannot be less than 3 characters"],
    },

    accountUser: {
      type: String,
      require: [true, "Account Name is required"],
      maxLength: [50, "Name cannot be more than 50 characters"],
      minLength: [3, "Name cannot be less than 3 characters"],
    },

    tax: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },

    historyUser: {
      name: {
        type: String,
        require: [true, "Name is required"],
      },
      phoneNumber: {
        type: String,
        require: [true, "Phone number is required"],
        maxLength: [13, "Phone number cannot be more than 13 characters"],
        minLength: [9, "Phone number cannot be less than 9 characters"],
      },
    },
    voucherTopup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Voucher",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

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

module.exports = mongoose.model("Transaction", transactionSchema);
