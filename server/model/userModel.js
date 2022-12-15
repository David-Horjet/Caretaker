const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    about: {
      type: String,
    },
    dob: {
      type: Date,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
    isAgent: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
);

const Users = mongoose.model("users", userSchema);

module.exports = { Users };
