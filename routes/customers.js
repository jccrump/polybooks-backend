const express = require("express");
const router = express.Router();
const verifyToken = require("../helpers/verifyToken");
const customerModel = require("../models/customerModel");

router.get("/", verifyToken, (req, res) => {
  customerModel.find({}, (err, customers) => {
    if (err) console.log(err);
    res.json(customers);
  });
});
router.get("/:id", verifyToken, (req, res) => {
  customerModel
    .findOne({ _id: req.params.id })
    .then(customer => {
      res.send(customer);
    })
    .catch();
});
router.post("/addcustomer", verifyToken, (req, res) => {
  req.body.company_id = req.user.user.company_id;
  let customer = {
    ...req.body
  };
  let data = new customerModel(customer);
  data.save();
  res.json({ message: "It Worked" });
});
module.exports = router;
