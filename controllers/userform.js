const Suser=require('../models/Suser')
const express=require('express')

const userform=async(req,res)=>{
    const suser=new Suser(req.body)
    await suser.save()
    res.json({message:"user added succesas fuly",
suser})
}


module.exports=userform