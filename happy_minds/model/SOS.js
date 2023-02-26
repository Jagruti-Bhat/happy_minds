const mongoose = require("mongoose");

const SOSSchema = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
        required:true
    },
    intensityB:{
        type:Number,
        required:true
    },
    intensityE:{
        type:Number,
        required:true
    },
    emotion:{
        type:String,
        required:true,
        enum:{
            values:["angry","stressed","calm","happy","sad","panic","empty","overwhelmed","lonely"]
        }
    },
    thoughts:[
        {physicalSensations : {
            type:String,
        },
        exercise:{
            type:String,
        },
        specificFeeling:{
            type:String
        },
        triggerEvent:{
            type:String
        }

    }
    ],
    grateful:{
        type:String
    },
    date:{
        type:Date,
        required:true,
        unique:true,
        default:Date.now()
    }

});

module.exports = mongoose.model("SOS",SOSSchema)