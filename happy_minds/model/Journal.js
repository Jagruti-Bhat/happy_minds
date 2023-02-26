const mongoose = require("mongoose");


const journalSchema = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:'User',
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now()
    },
    body:{
        type:String,

    },
    mood:{
        type:String,
        enum:{
            values:["angry","stressed","calm","happy","sad","panic","empty","overwhelmed","lonely"]
        }
    }
});

module.exports = mongoose.model("Journal",journalSchema)