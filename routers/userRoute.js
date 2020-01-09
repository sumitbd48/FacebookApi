const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const bodyParser = require('body-parser')
const auth = require('../middleware/auth')

router.use(bodyParser.urlencoded({extended:false}));

//register
router.post('/register',(req,res)=>{
    var myData = new User(req.body);
    myData.save().then(function(){
        res.send("User Saved Sucessfully");
    }).catch(function(e){
        res.send(e)
    })
    
})

//login
router.post('/login', async function (req, res) {
    try {
        const user = await User.checkCrediantialsDb(req.body.email,
            req.body.password)
        const token = await user.generateAuthToken()
        const name = await user.name
            res.send({ name, token })
    } catch (e) {
        res.status(400).send()
    }
})
module.exports = router