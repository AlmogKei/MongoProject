const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  name: String,
  price: Number,
  rating: Number,
  gpu: String,
  cpu: String,
  battery_score: Number,
  total_score: Number,
  company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
});

const PhoneModel = mongoose.model('Phone', phoneSchema);
module.exports = PhoneModel;
