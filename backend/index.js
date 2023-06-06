const express = require("express")
const colors = require("colors")
const dotenv=require("dotenv")
const morgan = require("morgan")
const cors=require("cors");
const connectDB=require("./config/db")
dotenv.config();
const port=process.env.PORT || 8080
const app = express()
connectDB();
app.use(express.json());
app.use(cors())

app.use('/api',require('./routes/UserRoutes'));
app.get('/',(req,res)=>{
    res.send('HELLO');
});


app.listen(port,()=>{
    try{
    console.log("Server started Successfully");
    }catch(e){
        console.log("Couldnot start the server");
    }
});