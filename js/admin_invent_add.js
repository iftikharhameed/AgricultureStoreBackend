// const { Router } = require("express")

const P_id=document.getElementById('pid')
const P_name=document.getElementById('pname')
const P_detail=document.getElementById('pdetail')
const P_price=document.getElementById('pprice')
const P_quantity=document.getElementById('pquantity')
const P_cat=document.getElementById('pcat')
const P_discount=document.getElementById('pdiscount')
const P_images=document.getElementById('pimage')

const newproduct=document.getElementById('addproduct')



const addProduct=(e)=>{
    e.preventDefault()
    var flag=true
    if(P_name.value.trim().length < 5){
        alert("Name must be greater then 5 letters and no space is allowed")
        flag=false
        return
    }

    else if(P_detail.value.trim().length < 10){
        alert("Detail must be greater then 10 letters and no space is allowed")
        flag=false
        return
    }


 if(flag)
 {

     
     
    // POST request using fetch()
    fetch("http://localhost:5000/api/addProduct", {
 
        // Adding method type
        method: "POST",
 
        // Adding body or contents to send

        body: JSON.stringify({
    P_id:P_id.value,
    P_name:P_name.value,
    P_detail:P_detail.value,
    P_price:P_price.value,
    P_quantity:P_quantity.value,
    P_cat:P_cat.value,
    P_discount:P_discount.value,
    P_images:P_images.value
    
    
}),
 
// Adding headers to the request
headers: {
    "Content-type": "application/json; charset=UTF-8"
}
})
}

P_id.value="",
P_name.value="",
P_detail.value="",
P_price.value=""
P_quantity.value="",
P_cat.value="",
P_discount.value="",
P_images.value=""


}

newproduct.addEventListener('submit',addProduct)
