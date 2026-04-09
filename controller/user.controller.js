import createuser from "../service/user.service.js";
import {StatusCodes} from "http-status-pro-js"

 
  async function usercontroller(req, res){
     try {

         let res =  await createuser(req)
if(res){
         return res.status(200).json({
            code:StatusCodes.OK.code,
            message:StatusCodes.OK.message,
            data:res
         })
}
else{
        return res.status(500).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
        

}
           return res.status(500).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
        
    } catch (error) {
        return res.status(500).json({
            code:StatusCodes.INTERNAL_SERVER_ERROR.code,
            message:StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })

        
    }
 }

  export default usercontroller;