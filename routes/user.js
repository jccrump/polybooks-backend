const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const verifyToken = require("../helpers/verifyToken");
const dotenv = require("dotenv");
dotenv.config();

router.post("/login", (req, res) => {
  console.log(req.body);
  userModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user.access_allowed) {
        console.log("Access Allowed");
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            console.log("Password Correct");
            jwt.sign({ user }, process.env.SECRET, (err, token) => {
              if (err) {
                console.log(err);
              } else {
                console.log(`Token Created: ${token}`);
                res.header("Authorization", token).send(token);
              }
            });
          }
        });
      }
    })
    .catch(err => console.log(err));
});

router.post("/register", verifyToken, (req, res) => {
  res.json({ message: "It works" });
});

module.exports = router;
