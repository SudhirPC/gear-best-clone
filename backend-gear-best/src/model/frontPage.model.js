const mongoose = require("mongoose");
const frontPageSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    flashSale: { type: String, required: false },
    shipFrom: { type: String, required: false },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("frontPageSchema", frontPageSchema);
