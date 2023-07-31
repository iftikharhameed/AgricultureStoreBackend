const product = require("../models/NewProduct");

const add_product = async(req,res)=>{

    try{
        var arrimages = [];
        for(let i=0 ; i<req.files.length;i++){
            arrimages[i] = req.files[i].filename;
        }

        var product = new Product({
            p_id:req.body.p_id,
            P_name:req.body.P_name,
            P_price:req.body.P_price,
            P_quantity:req.body.P_quantity,
            p_cat:req.body.p_cat,
            images: arrimages

        });

        const product_data = await product.save();
        res.status(200).send({success:true,msg:"Product Details",data:product_data});

    }

    catch(error){
        res.status(400).send({success:false,msg:error.message});
    }


}

module.exports = {
    add_product
}