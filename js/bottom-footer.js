const footer = () =>{
    let footer = document.querySelector('#bootom-footer');

    footer.innerHTML = `

    <section class="footer">

    <div class="box-container">

        <div class="box1">
            <h2><i class="fa fa-shopping-basket"></i>Fertilizer</h2>
            <h4>Contact Information</h4>
            <p><strong>Address: </strong> Vehari Punjab Pakistan</p>
            <p><strong>Phone: </strong> +92 300-0000000 /(+92) 300-0000000</p>
            <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>

        </div>

        <div class="box">
            <h3>quick links</h3>
            <a href="home.html"> <i class="fa fa-arrow-right"></i> home</a>
            <a href="shop.html"> <i class="fa fa-arrow-right"></i> shop</a>
            <a href="about.html"> <i class="fa fa-arrow-right"></i> about</a>
            <a href="blog.html"> <i class="fa fa-arrow-right"></i> blog</a>
            <a href="contact.html"> <i class="fa fa-arrow-right"></i> contact</a>
        </div>

        <div class="box">
            <h3>extra links</h3>
            <a href="#"> <i class="fa fa-arrow-right"></i> my account </a>
            <a href="#"> <i class="fa fa-arrow-right"></i> my favorite </a>
            <a href="#"> <i class="fa fa-arrow-right"></i> my wishlist </a>
            <a href="#"> <i class="fa fa-arrow-right"></i> terms or use </a>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="#"> <i class="fa fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fa fa-twitter"></i> twitter </a>
            <a href="#"> <i class="fa fa-instagram"></i> instagram </a>
            <a href="#"> <i class="fa fa-pinterest"></i> pinterest </a>
        </div>


    </div>

</section>

<section class="credit">Created by Iftikhar Hameed | Mudassir Tahir | All rights reserved!</section>





    
    `;
}


footer();