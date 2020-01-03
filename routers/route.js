const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const bodyParser = require('body-parser')
const auth = require('../middleware/auth')

router.use(bodyParser.urlencoded({extended:false}));

router.post('/register',(req,res)=>{
    var myData = new User(req.body);
    myData.save();
})