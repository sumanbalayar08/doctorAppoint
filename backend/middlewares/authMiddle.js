const jwt = require("jsonwebtoken");

const AuthMiddle = async (req, res, next) => {
    try{
  const token = req.headers["authorization"].split(" ")[1]; 
  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      return res.status(200).send({ message: "Authorization Failed", success: false });
    } else {
      req.body.userId = decode.id;
      next();
    }
  });
}catch(err){
    console.log(err);
    res.status(401).send({message:'Internal Server Error',success:false});
}
};
module.exports=AuthMiddle;