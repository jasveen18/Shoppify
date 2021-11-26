const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
require('../db/conn');
const User = require('../model/userSchema');



//user registration
router.post('/register', async(req,res) => {

    const { name, username, email, password, confirm_password } = req.body;

    if(!name || !username || !email || !password || !confirm_password ){
        return res.status(422).json({error: 'please fill the fields properly'});
    }

    try{

        const emailExist = await User.findOne({email:email});
        const usernameExist = await User.findOne({username:username});

        if(emailExist){
            return res.status(422).json({error: 'email already exist'});
        }
        else if(usernameExist){
            return res.status(422).json({error: 'username already exist'});
        }
        else if(password != confirm_password){
            return res.status(422).json({error: 'password is not matching'});
        }
        else if(password.length<6){
            return res.status(422).json({error: 'password length should be minimum of 6 '});
        }
        else
        {
            const user = new User({username,name,email,password,confirm_password});
            //pre function called
            const userRegister = await user.save();

            if(userRegister){
                return res.status(200).json(`${user.name} has been successfully registered`);
            }
        }


    }catch(err){
        console.log('error in registration',err);
    }

});


//user login
router.post('/login', async(req,res) => {

    try{
        const { username,password } = req.body;

        if(!username || !password){
            return res.status(400).json({error:'please fill the details'});
        }

        const userLogin = await User.findOne({username:username});

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            // const tokken = await userLogin.generateAuthToken();

            // res.cookie('jwtoken', tokken , {
            //     expire:new Date(Date.now()+25892000000),
            //     httpOnly:true
            // });

            if(!isMatch){
                res.status(400).json({error:'invalid credientials'});
            }
            else
            {
                res.status(200).json(`${username} login successfull`);
            }
        }
        else
        {
            res.status(400).json({error:'invalid credientials'});
        }
        
    }catch(err){
        console.log('error in login',err);
    }

});



module.exports = router;
