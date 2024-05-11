const { Router } = require("express");
const userModel=require('../schema/userModel')

const userRouter=Router()
userRouter.get('/',async(req,res,next)=>{
    try{users
    let users=await userModel.find()
    res.json('users')}
    catch(e){
        next(e)
    }
})

userRouter.post('/',async(req,res,next)=>{
    let user=await userModel.create(req.body)
    res.json(user)
})

userRouter.put('/:id',async(req,res,next)=>{
    let user=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(user)
})

userRouter.delete('/:id',async(req,res,next)=>{
    await userModel.findByIdAndDelete(req.params.id)
    res.send('user deleted')
    
})


module.exports=userRouter