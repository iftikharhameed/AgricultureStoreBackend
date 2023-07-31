const User=require('../models/Suser')


exports.loginAdmin=async(req,res)=>{
    const user=await User.find({email:req.body.email, password:req.body.password})
    console.log(user);
    if(user.length>0){
        res.json({user:user[0], status:true })
    }
    else{
        res.json({message:"invalid credentials", status:false })
    }

}



// exports.loginAdmin=async(req,res)=>{
//     try{

//         let user=await Suser.create(req.body)
//         res.json({message:"user added succesas fuly", status:true,user})
//     }catch(error){
//         console.log(error);
//         res.json({"error":error, status:false})
//     }
// }
























// const User = require("../models/User"); 
// const bcrypt = require('bcrypt');


// const loadLogin = async(req, res)=>{
//     try{
//     res.render('login');
//     }
//      catch (error) {
//     console.log(error.message);
//     }
// }


// const verifyLogin = async(req, res) =>{

//     try{

//         const email = req.body.email;
//         const password = req.body.password;


//         const userData = await User.findOne({email:email});
//         if(userData){
//             if(password){
//                 req.session.User_id = userData._id; 
//                 res.redirect("/"); 

//             }
//             else{
//                 alert('incorrest password')
//                 res.render('login',{message:"email and password is incorrect"})
//             }
//         }
//         else{
//             alert('incorrest password')
//             res.render('login',{message:"email and password is incorrect"})
//         }
//     }
//     catch (error){

//         console.log(error.message)
//     }

// }


// const loadDashboard = async(req, res) =>{

//     try{
//         res.render('/');
//     }catch(error){
//         console.log(error.message);
//     }
// }

// module.exports ={
//     loadLogin,
//     verifyLogin,
//     loadDashboard
// }