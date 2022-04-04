const express=require("express")

const app=express()
const { sequelize, Conversation ,Message }= require('./models')


app.get('/',(req,res)=>{
    req.send("hello....")
})

app.listen(5000, async()=>{

    console.log("server connected to http://localhost:5000")
    await sequelize.authenticate()
    console.log("database connected..");
})