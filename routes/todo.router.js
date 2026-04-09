import express from "express"
import   user from "../model/user.model.js"
import auth from "../Auth/todo.Auth.js"

 let userRouter = express.Router()
 userRouter("/signup",  async (req, res)=>{
    try {
         let data =  await new user(req.body)
          data.save()
        
    } catch (error) {
        console.error(error)
        
    }
 })
 userRouter.get("/login",  async(req, res)=>{
    try {
        
    } catch (error) {
      
        
    }
    let{email, password} = req.body
    let userEMail = await user.find({email:email})
 })
 
