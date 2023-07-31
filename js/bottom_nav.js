const bottom = () =>{

    let nav = document.querySelector('#bottom_header');
    
    nav.innerHTML = `

    <a href="index.html" class="fa fa-home"></a>
        <a href="#product1" class="fa fa-list"></a>
        <a href="cart.html" class="fa fa-tags"></a>
        <a href="contact.html" class="fa fa-comments"></a>
        <a href="about.html" class="fa fa-tags"></a>

    `
    ;
}

bottom();