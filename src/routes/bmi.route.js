const express = require("express");

const BmiRoute = express.Router();
const User = require("../models/user.model.js");

BmiRoute.use(express.json());

BmiRoute.post("/", async(req,res) =>{
  let {email,height,weight} = req.body;
    height = height * 0.3048;
    height = height * height ;
    let BMI = weight/height ;
    let tag ;
    console.log(BMI);
   if(BMI < 18.5){
     tag = "Underweight";

   }else if(BMI>=18.5 && BMI <=24.9 ){
    tag = "Normal Weight";
   } else if(BMI>=25 && BMI <=29.9 ){
    tag = "Overweight";
   } else if(BMI>=30 && BMI <=34.9 ){
    tag =  "Obesity";
   } else if(BMI>=35){
    tag = "Extreme Obesity";
   } 
   



  try{
    const user = await User.findOne({email: email});

    if(!user){
        const newUser = await User.create({
            email, history : [{tag, BMI}]
        })
    
        return res.status(200).json({status : "ok", message : [{tag,BMI}]})
       
    } 
 let a = {tag,BMI};
 let arr = user.history;
 arr.push(a);

  await User.updateOne({email}, {$set :{history : arr}});

    return res.status(201).send({status : "ok", message :[a]});

  } catch(e){
    console.log(e);
  }
})


module.exports = BmiRoute;