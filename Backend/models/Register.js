const mongoose=require("mongoose");

const RegisterSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    confirmpPassword:String
})

const RegisterModel=mongoose.model("registerUsers",RegisterSchema)
module.exports=RegisterModel