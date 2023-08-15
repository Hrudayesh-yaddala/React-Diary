const mongoose=require("mongoose")
const ContactSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Name is required"],
        },
        email:{
            type:String,
            required:[true,"Email is required"],
        },
        message:{
            type:String,
            required:[true,"Message is required"],
        },
    },
    {
        timestamps:true,
    }
);
module.exports=new mongoose.model("Contact",ContactSchema);