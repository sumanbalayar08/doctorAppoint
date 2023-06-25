const express=require("express")
const router=express.Router()

const{loginController,RegisterController,authController}=require("../controllers/UserControl")
const authMiddle=require("../middlewares/authMiddle")

router.post('/login',loginController);
router.post('/register',RegisterController);
router.post('/getUserData', authMiddle, authController);

module.exports=router;