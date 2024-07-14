const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  country: String
});

const CompanyModel = mongoose.model('Company', companySchema);
module.exports = CompanyModel;
