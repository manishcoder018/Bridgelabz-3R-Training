import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.router.js";
let app = express()
let port  = 8083

mongoose.connect('mongodb://localhost:27017/abc')
.then(()=>console.log("mongoose connect"))
.catch(err => console.log(err));
app.get("/",(req,res)=>{
   res.send("Welcome todo")
 })
  app.use("/user", userRouter)



app.listen(port, ()=>{
    console.log("connect server")
})