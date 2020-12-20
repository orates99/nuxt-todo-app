const express=require("express")


const app=express()






app.get("/",(req,res)=>{
  console.log("Veri İstendi.")
  
    
      res.status(200).json({
        data:{id:1,title:"Orhan"}
      })
    
  })

module.exports={
  path:"/api",
  handler:app
}
