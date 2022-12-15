const mongoose = require("mongoose");

const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model ("payment", paymentSchema);

module.exports = { Payment };
