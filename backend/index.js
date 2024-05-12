const express=require("express");
const app=express();
const PORT=3001;
app.listen(PORT,(error)=>{
    if(!error){
        console.log("app is listen on port 3001")
    }
    else{
        throw error
    }
})
