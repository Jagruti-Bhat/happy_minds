const express = require("express");
const router = express.Router();
const {isLoggedIn} = require("../middlewares/user")
const {createJournal,
    getOneJournal,
    updateJournal,
    getAllJournal,
    deleteJournal
} = require("../controller/Journal");



router.route("/user/journal/create").post(isLoggedIn,createJournal)
router.route("/user/journal/getOneJournal/:id").get(isLoggedIn,getOneJournal)
router.route("/user/journal/updateJournal/:id").put(isLoggedIn,updateJournal)
router.route("/user/journal/deleteJournal/:id").delete(isLoggedIn,deleteJournal)
router.route("/user/journal/getAllJournal").get(isLoggedIn,getAllJournal)

module.exports = router;