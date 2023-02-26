const express = require("express");
const router=express.Router();

const {signUp,login,logout} = require("../controller/User")

router.route("/user/signup").post(signUp)
router.route("/user/login").post(login)
router.route("/user/logout").get(logout)

module.exports=router;