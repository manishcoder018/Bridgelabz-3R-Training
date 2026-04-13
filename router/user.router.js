import usercontroller from "../controller/user.controller.js"
import exress from "express"
let userRouter = exress.Router()

userRouter.post("/signup", usercontroller)

 
export default  userRouter