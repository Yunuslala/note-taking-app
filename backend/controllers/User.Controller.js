const AsyncErrorHandler = require("../middlewares/AsyncErrorHandler");
const { ErrorHandler } = require("../utils/Error.Handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../models/User.model");


exports.RegisterUser = AsyncErrorHandler(async (req, res, next) => {
  try {
    const {
      email,username,password
    } = req.body;
    const findExisting = await UserModel.findOne({ email });
    if (findExisting) {
      return   res
      .status(200)
      .send({ success: false, msg: "user is already registered go for login" });
    }
    const hash = await bcrypt.hash(password, 10);
  
    const saveUser = new UserModel({
    email,username,password:hash
    });
    
    await saveUser.save();
    return res.status(201).send({
      success: true,
      msg: "User has been registered sucessfully",
    });
  } catch (error) {
    console.log("error",error);
    return next(new ErrorHandler(error))
  }
 
});

exports.loginUser = AsyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(200)
      .send({ success: false, msg: "email and password required" });
  }
  let finduser = await UserModel.findOne({ email }).select("+password");
  if (!finduser) {
    return   res
    .status(200)
    .send({ success: false, msg: "email is not registered go for login" });
  }
  let compare = await bcrypt.compare(password, finduser.password);
  if (compare) {
    const token = await jwt.sign(
      { UserId: finduser._id },
      process.env.secret
    );
    return res.status(200).send({
      success: true,
      msg: "User has been login sucessfully",
      token,
      data: finduser,
    });
  } else {
    return   res
    .status(200)
    .send({ success: false, msg: "password is not correct" });
  }
});
