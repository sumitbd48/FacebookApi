const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const user = new mongoose.Schema({
    name: {
        type : String,
        required:true
    },

    email: {
        type : String,
        required:true

    },

    dob: {
        type : String,
        required:true

    },

    gender: {
        type : String,
        required:true

    },
    
    phone: {
        type : String,
        required:true

    },

    password: {
        type : String,
        required:true

    },

    tokens: [{
        token: {
            type: String
        }
    }]

})

user.statics.checkCrediantialsDb = async (user22, pass) => {

    const user1 = await User.findOne({ email: user22, password: pass })
    return user1;
}

user.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

    console.log(token);
    user.tokens = user.tokens.concat({ token: token })
    await user.save()
    return token
}

const User = mongoose.model('User',user)
module.exports = User