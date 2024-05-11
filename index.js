const express=require('express')
const mongoose=require('mongoose')
const userRouter = require('./routes/userRouter')

const app=express()

app.use('/user',userRouter)

app.use((err,req,res,next)=>{
    console.log(err)
    res.send({success:false,message:err.message})
})
mongoose.connect('mongodb://127.0.0.1:27017/users')
app.listen(3000,()=>console.log('server running'))

