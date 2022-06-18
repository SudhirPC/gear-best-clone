const mongoose = require('mongoose')
const WatchSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    gender: { type: String, required: false },
    brand: { type: String, required: false },
  },
  {
    timestamp: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('WatchSchema', WatchSchema)