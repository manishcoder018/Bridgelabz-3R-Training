import user from "../model/user.model.js";
 
export  async function createuser(req){
    try {
         
        let data  =  await new user( {    name:"abc",
            email:"abc@gmail.com",
            password:"23445"})
         let res =  await data.save()
          console.log(res)
          if(res){
            return res
          }
          else{
            return false
          }
         
    } catch (error) {
        console.error(error)
        
    }
}

export default createuser