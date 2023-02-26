const mongoose = require("mongoose");
const validator= require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    reward:{
        type:Number,
        default:0
    }

});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.isValidatedPassword = async function (usersendPassword) {
    return await bcrypt.compare(usersendPassword, this.password);
  };

userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRY,
    })
}


module.exports = mongoose.model("User",userSchema)