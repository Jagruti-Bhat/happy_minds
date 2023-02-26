const app = require("./app")
require('dotenv').config()
const connectToDatabase = require("./config/db")

connectToDatabase()

const PORT = process.env.PORT

app.listen(PORT,()=>(console.log(`server is runing at port ${PORT}`)))