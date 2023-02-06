const express=require('express');
const router=express.Router(); 
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');


// this is the secret jwt 
const jwt_Secret="iloveumon152311@pelling"

//Router:1  creat a user using : POST "/api/auth/creatUser" [No login required]
router.post('/creatUser',[
   body('name','Name should be minimum 3 characters.').isLength({ min: 3 }),
   body('email','Enter a valid email.').isEmail(),
   body('password','Password should be minimum 8 characters.').isLength({ min: 8 }),
],async(req,res)=>{
   let success=false;
  //if there are errors send bad request and the error
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:success, errors: errors.array() });
    }
    //check wheather a user with same emailId exists or not 
    try {
      let user=await User.findOne({email:req.body.email})
    if(user){
      return res.status(404).json({success:success,error:"Sorry a user with this same email Id already exists"})
    }
    //  password hashing 
     const salt =await bcrypt.genSaltSync(10);
     const securePassword =await bcrypt.hashSync(req.body.password, salt);
    user= await User.create({
      name: req.body.name,
      email:req.body.email,
      password: securePassword ,
    })
      const data={
        user:{
          id:user.id
        }
      }
      const AuthenticationToken = jwt.sign(data,jwt_Secret);
      success= true;
       res.json({success:success ,AuthenticationToken:AuthenticationToken})
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error")
    }
})

//Router:2  authenticate a user using : POST "/api/auth/login" [No login required]
router.post('/login',[
  body('email','Enter a valid email.').isEmail(),
  body('password','Password cannot be blank').exists(),
],async(req,res)=>{
  let success= false; 
 //if there are errors send bad request and the error
  const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

   const {email,password}=req.body;
   try {
    let user=await User.findOne({email})
    if(!user){
      success=false
      return res.status(404).json({success:success,error:"Please try to login with correct login credentials"})
    }
    // now comparing the password 
    const passwordCompare=await bcrypt.compare(password,user.password)
    if(!passwordCompare){
      success=false
      return res.status(404).json({success:success,error:"Please try to login with correct login credentials"})
    }
    const payload={
      user:{
        id:user.id
      }
    }
    const AuthenticationToken = jwt.sign(payload,jwt_Secret);
    success=true;
     res.json({success:success,AuthenticationToken:AuthenticationToken})

   } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error")
   }
  
  })

  //Router:3  getting the user details using  : POST "/api/auth/getuser" [login required]
  router.post('/getuser',fetchUser,async(req,res)=>{
    try {
       userId=req.user.id;
       const user= await User.findById(userId).select("-password")
       res.send(user);
    } catch (error) {
      console.error(error.message);
    res.status(500).send("Internal server error")
    }
  })

module.exports=router;