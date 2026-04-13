import express from "express"
let app = express();
let port = 8081

app.get("/user",(req,res)=>{
    res.send(req.body);
})

app.listen(port,()=>{
    console.log("connect server")
})
