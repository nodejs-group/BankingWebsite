const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please provide username']
    },
    email: {
        type: String,
        required: [true,'Please provide a unique email address'],
        validate: [validator.isEmail,'Please provide a valid email'],
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: [true,'Please provide ur phone number'],
        unique: true,
        validate: function(el){
            return el.length===10
        }
    },
    password: {
        type: String,
        required: [true,'Please enter a password'],
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: [true,'Please confirm your password'],
        minlength: 8,
        validate: {
            validator: function(el){
                return el===this.password
            },
            message: "Passwords are not the same"
        }
    }
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,12);

    this.confirmPassword = undefined;
    next();
})




const userModel = mongoose.model('User',userSchema)

module.exports = userModel