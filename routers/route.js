const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const bodyParser = require('body-parser')
const auth = require('../middleware/auth')

router.use(bodyParser.urlencoded({extended:false}));

router.post('/register',(req,res)=>{
    var myData = new User(req.body);
    myData.save();
    res.send("User Saved Sucessfully");
})

router.post('/login', async function (req, res) {
    try {
        const user = await User.checkCrediantialsDb(req.body.email,
            req.body.password)
        const token = await user.generateAuthToken()
            res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})


module.exports = router