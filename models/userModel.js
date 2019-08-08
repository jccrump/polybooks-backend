const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    company_id: String,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    user_type: String,
    access_allowed: Boolean
  },
  { collection: "users" }
);

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
