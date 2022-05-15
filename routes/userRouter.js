const express = require('express')
const authController = require('./../controllers/authController')

const router = express.Router()

router.get('/',(req,res)=>{
    res.render('login')
})

router.get('/create-acc',(req,res)=>{
    res.render('signup')
})



router.post('/signup',authController.signup)



module.exports = router;