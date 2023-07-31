const header = () =>{

    let nav = document.querySelector('#top-header');
    let login = document.querySelector('#login-btn')
    const cartProductCount = localStorage.getItem('cartProductCount');


    nav.innerHTML =`

    <header class="header">

    <div class="header1" id="header1">
        
        
        <div class="icons">
            <div class="delivery">
                <a href="#" class="fa fa-truck"></a>
                <a href="#" class="del-logo">Free Delivery </a>
                <a href="#" class="del-logo">|</a>
                <a href="#" class="fa fa-globe"></a>
                <a href="#" class="del-logo">Return Policy </a>
                <a href="#" class="del-logo">|</a>
                <a href="#" class="del-logo">Follow Us </a>
            </div>
            <div id="search-btn" class="fa fa-search"></div>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
            <div id="#" class="fa fa-facebook-f"></div>
        </div>

        <div class="a" id="lofin-info">
          <div id="log-container">
          <a href="#" class="logo" id="login-btn">Login /</a>
          <a href="signup.html" class="logo"> Register</a>
          </div>

          <div id="admin-container">
           <a href="admin_login_only.html" class="logo" id="login-btn">Admin Login Only</a>
          </div>

            <div id="profile-show">
              <img src="images/user.png" width="40px" height="40px" >
              <ul class="profile-menu-list">
                <li class="profile-menu" >
                      <a href="#" id="loggedUserName" class="menu-title"></a>
          
                      <ul class="dropdown-list">
          
                        <li class="dropdown-item">
                          <a href="userprofile.html">Profile</a>
                        </li>
          
                        <li class="dropdown-item">
                          <a href="userorder.html">Orders</a>
                        </li>
          
                        <li class="dropdown-item">
                          <a href="#">wishlist</a>
                        </li>
          
                        <li class="dropdown-item">
                          <a href="#" id="userlogout">Log out</a>
                        </li>
          
                      </ul>
                    </li>
              </ul>
            </div>

        </div>
        


       
    </div>


    <div class="header2">

        <div class="logo">
            
            <img src="images/logo.png">
            

        </div>

        <form action="search_results.html" class="search-form" onsubmit="performSearch(event)">
  <input type="search" name="" placeholder="Search here..." id="search-box">
  <div class="label" id="label">
    <label for="search-box" class="fa fa-search"></label>
  </div>
</form>

        <div class="cart icons">
            <a href="cart.html" class="fa fa-shopping-cart"></a>
            <div class="count" id="shoping-count">${cartProductCount}</div>
            <a href="cart.html" class="fa fa-heart"></a>
            <div class="count"></div>

        </div>

        
        
    </div>

    <div class="header3">
        <div class="cat_name">
          <div class="fa fa-list"></div>
          <select class="category" value="" name="count" id="country" onchange="redirectToPage(this.value)">
            <option selected hidden value="">Select a category</option>
            <option value="seed">Seed</option>
            <option value="machine">Machinery</option>
            <option value="crop">Crops</option>
          </select>
          <div class="arrow"></div>
        </div>

        <nav class="desktop-navigation-menu">

            
    
            <div class="container">
      
              <ul class="desktop-menu-category-list">
      
                <li class="menu-category">
                  <a href="index.html" class="menu-title">Home</a>
                </li>
      
                
      
                <li class="menu-category">
                  <a href="allproducts.html" class="menu-title">Fertilizer</a>
      
                  <ul class="dropdown-list">
      
                    <li class="dropdown-item">
                      <a href="sprayproduct.html">Spray</a>
                    </li>
      
                    <li class="dropdown-item">
                      <a href="cornseed.html">seeds</a>
                    </li>
      
                    <li class="dropdown-item">
                      <a href="machinery.html">Machinery</a>
                    </li>
      
                    <li class="dropdown-item">
                      <a href="allproducts.html">ALl products</a>
                    </li>
      
                  </ul>
                </li>
      
                <li class="menu-category">
                  <a href="seedproduct.html" class="menu-title">SEEDS</a>
      
                  <ul class="dropdown-list">
      
                    <li class="dropdown-item">
                      <a href="seedproduct.html">Rice Seeds</a>
                    </li>
      
                    <li class="dropdown-item">
                      <a href="cornseed.html">corn seeds</a>
                    </li>
      
                    <li class="dropdown-item">
                      <a href="vegetableseeds.html">vegetable Seeds</a>
                    </li>
      
                    <li class="dropdown-item">
                      <a href="cottonseed.html">Cotton Seeds</a>
                    </li>      
                  </ul>
                </li>
      
                
      
                <li class="menu-category">
                  <a href="contact.html" class="menu-title">Contact Page</a>
                </li>
      
                <li class="menu-category">
                  <a href="about.html" class="menu-title">About US</a>
                </li>
      
              </ul>
      
            </div>
      
          </nav>

          <div class="support">
            <a href="#" class="fa fa-user"></a>
            <div class="content">
                <h3>(0300) 4082177</h3>
                <p>Customer Support</p>
            </div>

        </div>
    </div>

</header>








    
    `;
}



header();


function performSearch(event) {
  event.preventDefault(); // Prevent form submission

  const searchBox = document.getElementById('search-box');
  const searchTerm = searchBox.value;

  // Perform the search logic with the searchTerm
  // You can use the searchTerm to filter the products or perform an API request
  
  // Store the searchTerm in local storage to pass it to the search_results.html page
  localStorage.setItem('searchTerm', searchTerm);
  
  // Navigate to the search_results.html page
  window.location.href = 'search_product.html';

}


function redirectToPage(value) {
  if (value === 'seed') {
    window.location.href = 'seedproduct.html';
  } else if (value === 'machine') {
    window.location.href = 'machinery.html';
  } else if (value === 'crop') {
    window.location.href = 'cottonseed.html';
  } 
}









