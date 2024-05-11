const { Schema, model } = require("mongoose");

let userSchema=new Schema({
    name:String,
    age:Number,
    phone:String
})

let  userModel=model('user',userSchema)
module.exports= userModel