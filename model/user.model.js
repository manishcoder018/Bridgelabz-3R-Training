import mongoose from "mongoose";
let userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        lowecase:true,
      
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
       
   
    }
})


 let user = mongoose.model("user", userSchema)
  export default user