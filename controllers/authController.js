const User = require('./../models/userModel')


exports.signup = async (req,res)=>{
    try{
        const newUser = await User.create(req.body)
        
        console.log("New user created",newUser)
        return res.redirect('/')
    }catch(err){
        console.log(req.body)
        console.log("ERROR creating user",err);
        res.status(404).send("Can't create user")
    }
}