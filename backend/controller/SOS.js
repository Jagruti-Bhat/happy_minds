const SOS = require("../model/SOS");
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utilis/customError");
const User = require("../model/User");
const mongoose = require("mongoose")


exports.add =BigPromise(async(req,res,next)=>{

    const {intensityB, intensityE,emotion,thoughts,grateful,date}= req.body

    const user = req.user.id

    if(!intensityB || !intensityE || !emotion){
        return next(new CustomError("intensityB and intensityE and emotion are required",400))
    };
    const userDetails = await User.findById(user)

    if(intensityB && intensityE && emotion){
       userDetails.reward = userDetails.reward + 30;
    }

    if(thoughts && grateful){
        userDetails.reward = userDetails.reward + 60;
    }
const reward = userDetails.reward
await User.findByIdAndUpdate(user,{reward})
// console.log(userDetails.reward)
    const sos =await SOS.create({
        intensityB,
        intensityE,
        emotion,
        thoughts,
        grateful,date,user
    })

    res.status(200).json({sos,reward})

})

exports.getAllSOS = BigPromise(async(req,res,next)=>{
    
    const user = mongoose.Types.ObjectId(req.user.id)

    const {emotion} = req.body

    const sos = await SOS.find({user:user, emotion:emotion})
    if(sos.length==0){
        return next(new CustomError("You havent felt like this before",400))
    }
    res.status(200).json(sos)
    
})
