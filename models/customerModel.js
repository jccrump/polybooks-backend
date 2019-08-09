const mongoose = require("mongoose");

let customerSchema = mongoose.Schema(
  {
    company_id: String,
    first_name: String,
    last_name: String,
    street_address: String,
    project_manager: String,
    city: String,
    zip: String,
    phone: String,
    email: String
  },
  { collection: "customers" }
);

let customerModel = mongoose.model("customers", customerSchema);

module.exports = customerModel;
