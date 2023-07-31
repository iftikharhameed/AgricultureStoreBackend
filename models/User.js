const mongoose =require('mongoose')
const {Schema} =mongoose

const userSchema=new Schema({

    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:[true,"user with this email already exist"],
        required:true
    },
    dob:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('User',userSchema)