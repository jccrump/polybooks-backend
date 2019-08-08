const express = require("express");
const router = express.Router();
const verifyToken = require("../helpers/verifyToken");
const expenses = require("../models/expenseModel");

router.get("/", verifyToken, (req, res) => {
  console.log(req.user);
  expenses.find({}, (err, expenses) => {
    if (err) console.log(err);
    res.json(expenses);
  });
});

module.exports = router;
