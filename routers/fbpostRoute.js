const express = require('express')
const FBPost = require('../models/fbpost')
const router = new express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended:false}));

//add post
router.post('/addPost',(req,res)=>{
    var fbPost = new FBPost(req.body);
    fbPost.save().then(function(){
        res.send("FbPost Saved Successfully");
    }).catch(function(e){
        res.send(e)
    })
})

//find post
router.get('/findPost',(req,res)=>{
    FBPost.find().then(function(findallpost){
        res.send(findallpost)
    }).catch(function(e){
        res.send(e)
    })
})

module.exports = router