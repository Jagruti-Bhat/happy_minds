const User = require("../model/User")
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utilis/customError");
const cookieToken =require("../utilis/cookieToken");



exports.signUp= BigPromise(async (req,res,next)=>{
const {name,email,password,phone} = req.body 
 if(!name || ! email || !password || !phone){
    return next(new CustomError("name, email, password and phone are required",400))
 }
 const user= await User.create({
    name,
    email,
    password,
    phone
 });
 cookieToken(user,res)
})

exports.login=BigPromise(async (req,res,next)=>{
   const {email, password} = req.body
   if(!email || !password){
      return next(new CustomError("email and password are required",400))
   }
   const user =await User.findOne({email}).select("+password");
   if(!user){
      return next(new CustomError("user not registerd",400))
   }
   const isPasswordCorrect = await user.isValidatedPassword(password);
   if(!isPasswordCorrect){
      return next(new CustomError("wrong password",400))
   }
   cookieToken(user,res)
});

exports.logout=BigPromise(async(req,res,next)=>{
   res.cookie("token",null,{
      expires: new Date(Date.now()),
      httpOnlly: true,
   })
   res.status(200).json({
      sucess:true,
      message:"Logout sucessfull"
   })
})