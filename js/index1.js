
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


let countDate = new Date('July 10, 2023 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}


// const getCartDetail=()=>{
//     if(localStorage.getCart("data"))
//     {
        
//         cartData=JSON.parse(localStorage.getCart("data"))
//         document.getElementById('shoping-count').innerText=cartData.name
//     }

// }




let userData=""
const getUserDetail=()=>{
    if(localStorage.getItem("data"))
    {
        
        userData=JSON.parse(localStorage.getItem("data"))
        document.getElementById('loggedUserName').innerText=userData.name + userData.lastName
        document.getElementById('log-container').style.display="none"
        document.getElementById('admin-container').style.display="none"
        document.getElementById('profile-show').style.display="block"
        // document.getElementById('firstname').value=userData.name
        // document.getElementById('lastname').value=userData.lastName
        // document.getElementById('emailid').value=userData.email
        // document.getElementById('userpassword').value=userData.password
        // document.getElementById('phoneNumber').value=userData.phone
    }


}
document.addEventListener('DOMContentLoaded',()=>{
    
    getUserDetail()

    // getCartDetail()

searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

window.onscroll = () =>{

    searchForm.classList.remove('active');

if(window.scrollY > 80){
    document.querySelector('.header3').classList.add('active');
    
}else{
    document.querySelector('.header3').classList.remove('active');
}
}

setInterval(function(){
    CountDown();
},1000)




document.getElementById('userlogout').onclick = () =>{
    localStorage.clear()
    location.replace('./index.html')
}




})






