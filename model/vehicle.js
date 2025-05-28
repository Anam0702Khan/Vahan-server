const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  number: { type: String, required: true },
  challans: [
    {
      date: { type: String },
      amount: { type: Number },
      violation: { type: String },
    },
  ],
}, { timestamps: true });

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
