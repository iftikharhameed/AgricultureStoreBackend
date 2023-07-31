const User=require('../models/User')
const Order=require('../models/order')

exports.addUser=async(req,res)=>{
    try{

        let user=await User.create(req.body)
        res.json({message:"user added succesas fuly", status:true,user})
    }catch(error){
        console.log(error);
        res.json({"error":error, status:false})
    }
}

exports.loginUser=async(req,res)=>{
    // console.log(req.body.email, req.body.password);
    const user=await User.find({email:req.body.email, password:req.body.password})
    // console.log(user);
    if(user.length>0){
        res.json({user:user[0], status:true })
    }
    else{
        res.json({message:"invalid credentials", status:false })
    }

}


exports.getAllUsers=async(req,res)=>{
    const users=await User.find()
    // console.log(users);
    res.json(users)
}



exports.addorder=async(req,res)=>{
    try{

        let order=await Order.create(req.body)
        res.json({message:"order added succesas fuly"})

    }catch(error){
        // console.log(error);
        res.json({"error":error, status:false})
    }
    // await Order.create(req.body)
    // res.json({message:"order  detail added success fuly",})
}


exports.getAllOrder=async(req,res)=>{
    const order=await Order.find()
    // console.log(order);
    res.json(order)
}



exports.orderid=async(req,res)=>{
    console.log(req.body.id, req.body.name);
    const order=await User.findOne({id:req.body.id, name:req.body.name})
    // console.log(order)
    res.json(order);
}

exports.addorderid=async(req,res)=>{
    await Orderid.create(req.body)
    res.json({message:"user added succesas fuly",})
}