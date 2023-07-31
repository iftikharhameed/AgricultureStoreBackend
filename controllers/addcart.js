const cart = require('../models/cart')

exports.newCart=async(req,res)=>{
    await cart.create(req.body)
    res.json({message:"cart added successfull"})
}

exports.getcart=async(req,res)=>{
    const carts=await cart.find()
    res.json(carts)
}