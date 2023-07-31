const mongoose =require('mongoose')
const {Schema} =mongoose

const productSchema=new Schema({

    P_id:{
        type:String,
        required:true
        
    },
    P_name:{
        type:String,
        required:true
       
        
    },
    P_detail:{
        type:String,
        required:true
       
        
    },
    P_price:{
        type:String,
        required:true

        
    },
    P_quantity:{
        type:String,
        required:true
       
        
    },
    P_cat:{
        type:String,
        required:true
        
        
    },
    P_discount:{
        type:String,
        required:true
        
        
    },
    P_images:{
        type:String,
        required:true
        
        
    }
   
})

module.exports=mongoose.model('product',productSchema)
