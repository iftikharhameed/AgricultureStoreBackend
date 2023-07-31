const allproductCont = document.getElementById('search_product');

const getAllProducts = async () => {
  const res = await fetch('http://localhost:5000/api/getAllProducts', { method: 'GET' });
  const products = await res.json();

  const searchTerm = localStorage.getItem('searchTerm'); // Retrieve the search term from local storage

  var filteredProducts = []; // Array to store the filtered products

  // Filter the products based on the search term
  if (searchTerm) {
    filteredProducts = products.filter(item => item.P_name.toLowerCase().includes(searchTerm.toLowerCase()));
  } else {
    filteredProducts = products; // If no search term is available, show all products
  }

  var allproduct = '';

  filteredProducts.forEach(item => {
    var img = item.P_images.slice('12');

    allproduct += `
      <div class="box" id="box_section">
        <span class="discount">-${item.P_discount}%</span>
        <div class="icons">
          <a href="#" class="fa fa-heart"></a>
          <a href="#" class="fa fa-share"></a>
          <a href="./productdetail.html?id=${item._id}" class="fa fa-eye"></a>
        </div>
        <img src="images/${img}" alt="">
        <h3>${item.P_name}</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
        </div>
        <div class="price">Rs ${item.P_price} <span></span></div>
        <a href="./productdetail.html?id=${item._id}" class="btn add-to-cart" data-name="Product 2" data-price="20">add to cart</a>
      </div>
    `;
  });
  allproductCont.innerHTML = allproduct;
};

getAllProducts();
