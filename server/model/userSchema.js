const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Please add a name'],
        trim: true
    },

    username:{
        type:String,
        unique:true,
        required: [true, 'Please add a username']
    },

    email:{
        type:String,
        required: [true, "Please add an email"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
          ],
        unique:true
    },

    password:{
        type:String,
        minlength: [8, "Password should be 8 character long"],
        required: [true, "Please add a password"]
    },

    confirm_password:{
        type:String,
        minlength: [6, "Password should be 8 character long"],
        required: [true, "Please add a password"]
    },

    // tokens:[
    //     {
    //         token:{
    //             type:String,
    //             required:true
    //         }
    //     }
    // ],

    // resetPasswordToken:{
    //     type:String
    // },

    // resetPasswordExpires:{
    //     type:Date
    // },

    createdAt: {
        type: Date,
        default: Date.now,
    }
    
});


//hashing the password
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
        this.confirm_password = await bcrypt.hash(this.confirm_password, 10);
    }
    next();
});


// create a collection
const User = mongoose.model('USER', userSchema);

module.exports = User;
