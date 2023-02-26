const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const user = require("./route/User")
const sos = require("./route/SOS")
const journal = require("./route/Journal")

app.use("/api/v1/",user);
app.use("/api/v1/",sos);
app.use("/api/v1",journal)

module.exports = app

