const {Schema, model}  = require("mongoose");

const UserSchema = new Schema({
  
    email: {type : String, required: true},
    history : []
    
})

const User = model("User", UserSchema);
module.exports = User;