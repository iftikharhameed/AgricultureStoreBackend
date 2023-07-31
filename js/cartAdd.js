const Pimage=document.getElementById('MainImg')
const Pname=document.getElementById('pname')
const Pprice=document.getElementById('pprice')
const Psize=document.getElementById('psize')
const Pquantity=document.getElementById('pquantity')
const newcart=document.getElementById('addcart')
const userID=JSON.parse(localStorage.getItem("data"))
const uID= userID._id

const addCart=async(e)=>{
    e.preventDefault()

    fetch("http://localhost:5000/api/addcart",{

   // Adding method type
    method: "POST",


    // adding content to send

    body: JSON.stringify({
        uID:uID,
        Pimage:Pimage.src,
        Pname:Pname.textContent,
        Pprice:Pprice.textContent,
        Psize:Psize.value,
        Pquantity:Pquantity.value
    }),


    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }



})

alert("Product Added To Cart");
}


newcart.addEventListener('submit',addCart)