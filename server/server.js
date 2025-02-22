const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnect");

// connection
dotenv.config()
connectDB()

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// console.log(process.env.PORT);
const port = process.env.PORT

app.listen (port, ()=>{
    console.log(`server runnig on port ${port}`)
})
