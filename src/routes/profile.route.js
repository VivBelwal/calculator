const express = require("express");

const ProfileRoute = express.Router();
const Auth = require("../models/signup.model");

ProfileRoute.use(express.json());

ProfileRoute.get("/", async(req,res) =>{
  const {email} = req.body;

  try{
    const user = await Auth.findOne({email: email});

    if(!user){
        return res.status(401).send({status : "failed", message : "User not found !!"})
    } 
 
   

    return res.status(201).send({status : "ok", message :{name : user.name, userEmail : user.email}});

  } catch(e){
    console.log(e);
  }
})


module.exports = ProfileRoute;