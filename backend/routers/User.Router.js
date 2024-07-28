const  {RegisterUser,loginUser}=require("../controllers/User.Controller");
const express=require("express");
const UserRouter=express.Router();



UserRouter.route("/auth/register").post(RegisterUser);
UserRouter.route("/auth/login").post(loginUser);


module.exports={
    UserRouter
}