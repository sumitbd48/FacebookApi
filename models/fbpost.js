const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const fbpost = new mongoose.Schema({
    name: {
        type: String
    },

    posts: {
        type: String
    },

    image: {
        type: String
    }
})

const FBPost = mongoose.model('FBPost',fbpost)
module.exports = FBPost