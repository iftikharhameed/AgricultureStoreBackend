const getProductDetail=()=>{

    const urlParams = new URLSearchParams(window.location.search);
    const pid = urlParams.get('id');

    const products=JSON.parse(localStorage.getItem("product"))


    products.forEach((item, index)=>{
        // console.log(index, item)

        
        if(pid === item._id)
        {
            var img=item.P_images.slice('12')
    
            
            document.getElementById('pname').innerText=item.P_name
            document.getElementById('pprice').innerText=item.P_price
            document.getElementById('product_detail').innerText=item.P_detail
            document.getElementById('product_desc').innerText=item.P_detail
            document.getElementById('MainImg').src="images/"+img
        }
    });


}
document.addEventListener('DOMContentLoaded',()=>{
    
    getProductDetail()


})