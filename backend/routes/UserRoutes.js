const express=require("express")
const router=express.Router()

const{loginController,RegisterController}=require("../controllers/UserControl")

router.post('/login',loginController);
router.post('/register',RegisterController);
module.exports=router;