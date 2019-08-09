const express = require("express");
const router = express.Router();
const verifyToken = require("../helpers/verifyToken");
const companyModel = require("../models/companyModel");

router.get("/", verifyToken, (req, res) => {
  company.find({}, (err, expenses) => {
    if (err) console.log(err);
    res.json(expenses);
  });
});

router.post("/addcompany", verifyToken, (req, res) => {
  console.log(req.body);
  let newCompany = {
    company_name: req.body.company_name
  };

  let data = new companyModel(newCompany);
  data.save();
  res.json({ message: "Company Created" });
});

module.exports = router;
