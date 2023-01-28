const express = require("express");
const SignupRoute = express.Router();
const Auth = require("../models/signup.model");

SignupRoute.use(express.json());

SignupRoute.post("/", async (req,res) =>{
    const {email,password,name} = req.body;
    const user = await Auth.findOne({email})

    if(user){
        return  res.send({
            status : "failed",
            message : "User already exists !!"
        })
    }

    const newUser = await Auth.create({
        name , email, password
    })

    return res.status(200).send({status : "ok", message : "New User Signedup !!"})
})

module.exports = SignupRoute;