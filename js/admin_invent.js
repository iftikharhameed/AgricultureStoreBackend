const productsCont=document.getElementById('products')

const getAllProducts = async()=>{


    const res=await fetch('http://localhost:5000/api/getAllProducts',{method:'GET'})
    const products=await res.json()

    

    var productStr=""
    products.forEach(item => {
        var img=item.P_images.slice('12')
       
        

        productStr += `

        <div class="product_cont">
                    <div class="product_show" >
                        <span class="discount">${item.P_discount}</span>
                        <div class="icons">
                        <a href="./admin_invent_update.html?id=${item._id}" class="fa fa-pencil"></a>
                        <a href="#" class="fa fa-trash" id="product_delete" onclick="deleted('${item._id}')"></a>
                            <a href="productdetail.html" class="fa fa-eye"></a>
                        </div>
                        <img src="images/${img}" alt="">
                        <span class="pname">${item.P_name}</span>
                       
                    </div>
                </div>
        
        `
        
    });
    productsCont.innerHTML=productStr
   


}
getAllProducts()






