const mongoose=require('mongoose')
const colors=require("colors")
const dotenv=require("dotenv")
dotenv.config();

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/doctorappoint");
        console.log("Connected to MongoDB successfully");
    }catch(error){
        console.log(`MongoDB Error ${error}`.bgRed.white);
    }
}
module.exports=connectDB;