const express = require('express')
const FBPost = require('../models/fbpost')
const router = new express.Router()
const bodyParser = require('body-parser')
const imageUpload = require('../multer')
const auth = require('../middleware/auth')

router.use(bodyParser.urlencoded({extended:false}));

//add post
router.post('/addPost',[imageUpload],(req,res)=>{
    req.files.map(function(items){
        var fbPost = new FBPost({
            name : req.body.name,
            posts: req.body.posts,
            image: items.filename
        });
        fbPost.save().then(function(){
            res.send("FbPost Saved Successfully");
        }).catch(function(e){
            res.send(e)
        })
    })    
    
})

//find post
router.get('/findPost',auth,(req,res)=>{
    FBPost.find().then(function(findallpost){
        res.send(findallpost)
    }).catch(function(e){
        res.send(e)
    })
})

module.exports = router