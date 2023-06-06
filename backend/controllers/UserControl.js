const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      res.status(200).send({ success: false, message: "User Doesnot Exist" });
    }
    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if (!isMatched) {
      res
        .status(200)
        .send({ success: false, message: "Invalid email or password" });
    } else {
      const token = jwt.sign({ id: user.__id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({ success: true, message: "Login Success", token });
    }
  } catch (error) {
    console.warn(error);
    res
      .status(500)
      .send({ success: false, message: `Login Controller ${error.message}` });
  }
};

const RegisterController = async (req, res) => {
  try {
    const ExistingUser = await UserModel.findOne({ email: req.body.email });
    if (ExistingUser) {
      res.status(200).send({ success: false, message: `User Already Exists` });
    } else {
      const password = req.body.password;
      const numSaltRounds = 2;
      const hashedpassword = await bcrypt.hash(password, numSaltRounds);
      req.body.password = hashedpassword;
      const newUser = new UserModel(req.body);
      await newUser.save().then(() => {
        res
          .status(200)
          .send({ success: true, message: `Registerd Successfully` });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register controller ${error.message}`,
    });
  }
};
module.exports = { loginController, RegisterController };
