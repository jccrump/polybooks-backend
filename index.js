const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const expenseRoute = require("./routes/expense");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// DB CONNECTION
mongoose.connect(process.env.DATABASE, {
  useFindAndModify: false,
  useNewUrlParser: true
});

// MIDDLEWARE
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use("/api/user", userRoute);
app.use("/api/expense", expenseRoute);
// START SERVER
app.listen(process.env.PORT, () => {
  console.log("Server is running!");
});
