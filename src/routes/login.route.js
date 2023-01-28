const express = require("express");

const LoginRoute = express.Router();
const Auth = require("../models/signup.model");

LoginRoute.use(express.json());

LoginRoute.post("/", async(req,res) =>{
  const {email,password} = req.body;

  try{
    const user = await Auth.findOne({email: email});

    if(!user){
        return res.status(401).send({status : "failed", message : "User not found !!"})
    } 
 
    if(password !==user.password){
        return res.status(401).send({status : "failed", message : "Unauthorized"});
    }

    return res.status(201).send({status : "ok", message :"Login successful"});

  } catch(e){
    console.log(e);
  }
})


module.exports = LoginRoute;