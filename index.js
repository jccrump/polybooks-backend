const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/users')
const dotenv = require('dotenv');
dotenv.config()
const app = express();


mongoose.connect(process.env.DATABASE, { useFindAndModify: false, useNewUrlParser:true})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use('/api', users)

app.listen(process.env.PORT, ()=>{console.log('Server is running!')})