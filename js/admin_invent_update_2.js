const getProductDetail=()=>{

    const urlParams = new URLSearchParams(window.location.search);
    const pid = urlParams.get('id');

    const products=JSON.parse(localStorage.getItem("product"))

    // console.log(products)
    products.forEach((item, index)=>{

        // console.log(index, item)

        
        if(pid === item._id)
        {

            document.getElementById('producttype').value=item.P_id
            document.getElementById('name').value=item.P_name
            document.getElementById('price').value=item.P_price
            document.getElementById('quantity').value=item.P_quantity
            document.getElementById('category').value=item.P_cat
            document.getElementById('image').value=item.P_images
        }
    });


}
document.addEventListener('DOMContentLoaded',()=>{
    
    getProductDetail()


})
