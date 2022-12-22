const mongoose = require("mongoose");

const { Schema } = mongoose;

const tenantSchema = new Schema(
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
    gender: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "properties",
      required: true,
    },
  },
  { timestamps: true }
);

const Tenants = mongoose.model("tenants", tenantSchema);

module.exports = { Tenants };
