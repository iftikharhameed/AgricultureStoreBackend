const Product=require('../models/NewProduct')

exports.newProduct=async(req,res)=>{
    await Product.create(req.body)
    res.json({message:"Product added successfuly"})
}
exports.getAllProducts=async(req,res)=>{
    const products=await Product.find()
    res.json(products)
}



exports.updateProduct=async(req,res)=>{
    id=req.params.id
    data=req.body
    await Product.findByIdAndUpdate(id,data)
    res.json({message:"Product added successfuly"})
}

exports.deleteProduct=async(req,res)=>{
    id=req.params.id
    data=req.body
    await Product.findByIdAndDelete(id,data)
    res.json({message:"Product deleted successfuly"})
}