const express = require("express");
const router = express.Router();
const {isLoggedIn} = require("../middlewares/user")

const {add,getAllSOS} = require("../controller/SOS")

router.route("/user/sosAdd").post(isLoggedIn,add)
router.route("/user/getAllSOS").post(isLoggedIn,getAllSOS)

module.exports=router;
