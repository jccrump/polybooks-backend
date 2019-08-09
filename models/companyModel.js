const mongoose = require("mongoose");

let companySchema = mongoose.Schema(
  {
    company_name: String
  },
  { collection: "companies" }
);

let companyModel = mongoose.model("companies", companySchema);

module.exports = companyModel;
