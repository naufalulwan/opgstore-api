const mongoose = require("mongoose");

let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      maxLength: [50, "Name cannot be more than 50 characters"],
      minLength: [3, "Name cannot be less than 3 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password cannot be less than 6 characters"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
    },
    fileName: { type: String },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      maxLength: [13, "Phone number cannot be more than 13 characters"],
      minLength: [9, "Phone number cannot be less than 9 characters"],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Player", playerSchema);
