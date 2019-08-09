const express = require("express");
const router = express.Router();
const verifyToken = require("../helpers/verifyToken");
const customerModel = require("../models/customerModel");

router.get("/", verifyToken, (req, res) => {
  console.log(req.user);
  customerModel.find({}, (err, customers) => {
    if (err) console.log(err);
    res.json(customers);
  });
});

module.exports = router;
