const Journal = require("../model/Journal")
const BigPromise = require("../middlewares/BigPromise");
const CustomError = require("../utilis/customError")


exports.createJournal = BigPromise(async(req,res,next)=>{

const {body,mood} = req.body;
const user = req.user._id;

if(!body){
    return next(new CustomError("empty journal cannot be saved",401))
}

const journal = await Journal.create({
    user,
    body,
    mood
})

res.status(200).json(journal)


})

exports.updateJournal = BigPromise(async (req,res,next)=>{
    const {body,mood} = req.body

    const journal = await Journal.findByIdAndUpdate(req.params.id,
        {
            body,
            mood
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
        res.status(201).json(journal)
})

exports.getOneJournal = BigPromise(async (req,res,next)=>{
    

    const journal =await Journal.findById(req.params.id)

    res.status(200).json({
        sucess:true,
        journal})

})

exports.deleteJournal = BigPromise(async(req,res,next)=>{
const journal = await Journal.findByIdAndDelete(req.params.id)
res.status(200).json({
    sucess:true,
    message:"journaldeleted sucessfully"
})
})

exports.getAllJournal = BigPromise(async(req,res,next)=>{

    const userId = req.user.id;
    
    const allJournals = await Journal.find({user:userId});

    res.status(200).json(allJournals)

})