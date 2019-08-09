const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    company_id: String,
    first_name: String,
    last_name: String,
    phone: Number,
    role: String,
    email: String,
    password: String,
    access_allowed: String
  },
  { collection: "users" }
);

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
