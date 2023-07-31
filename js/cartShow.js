const productsCont=document.getElementById('pcart')
const userdataID=JSON.parse(localStorage.getItem("data"))

const getAllUsers = async()=>{



    const res=await fetch('http://localhost:5000/api/getcart',{method:'GET'})
    const products=await res.json()

    var productStr=""
    
    let totalSum = 0; // Initialize the total sum
    let cartProductCount = 0; 

products.forEach(item => {
  if (item.uID === userdataID._id) {
    const quantity = Number(item.Pquantity);
    const price = Number(item.Pprice);
    const subtotal = quantity * price;

    // Update the subtotal for each product
    document.getElementById('cart_subtotal').innerText = subtotal;
    document.getElementById('cart-total').innerText = subtotal;

    const img = item.Pimage.slice('29');

    productStr += `
      <tr>
        <td><a href="#" onclick="deleted('${item._id}')"><i class="fa fa-times-circle"></i></a></td>
        <td><img src="images/${img}" alt=""></td>
        <td>${item.Pname}</td>
        <td>${price}</td>
        <td><input type="number" value="${quantity}"></td>
        <td>${subtotal}</td>
      </tr>
    `;

    // Add the subtotal to the total sum
    totalSum += subtotal;

    cartProductCount++;
  }
});

// Update the total sum in the HTML element with the ID 'cart-total'
document.getElementById('cart_subtotal').innerText = totalSum;
document.getElementById('cart-total').innerText = totalSum;

const cartCount = cartProductCount;

localStorage.setItem('cartProductCount', cartProductCount);

      
    productsCont.innerHTML=productStr



   

}
getAllUsers()

