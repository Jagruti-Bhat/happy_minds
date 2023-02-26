const mongoose = require("mongoose")
const URL = process.env.DB_URL 

const connectToDatabase=()=>{
   
        mongoose.set("strictQuery", false);
        mongoose
        .connect(URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then(()=>(console.log("DB got connected")))
        .catch((error)=>{
            console.log(`DB connection issues`)
        console.log(error)
        }
        
        )
   
}

module.exports= connectToDatabase