const express = require("express");

const LogoutRoute = express.Router();


LogoutRoute.use(express.json());

LogoutRoute.post("/", async(req,res) =>{
  const {email} = req.body;
  return res.status(200).send({status : "ok", message : "User Successfully logged out."})
  
})


module.exports = LogoutRoute;