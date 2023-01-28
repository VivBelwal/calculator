const {Schema, model}  = require("mongoose");

const AuthSchema = new Schema({
    name : {type : String, required: true},
    email: {type : String, required: true, unique: true},
    password : {type : String, required: true}, 
})

const Auth = model("Auth", AuthSchema);
module.exports = Auth;