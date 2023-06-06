const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
exports.default=mongoose.model("user",UserSchema)