window.onload = () =>{

    let user = JSON.parse(localStorage.data || null);

    if(user == null){
        location.replace('./index.html')
    }
}




const firstName=document.getElementById('fname')
const lastName=document.getElementById('lname')
const country=document.getElementById('country')
const address=document.getElementById('address')
const city=document.getElementById('city')
const postal=document.getElementById("postal")
const phone=document.getElementById("phoneNo")
const email=document.getElementById('cemail')
const tPrice=document.getElementById('cart-total')
const submitbtn=document.getElementById('addOrderform')
const userID=JSON.parse(localStorage.getItem("data"))
const uID= userID._id



const addOrder = async (e) => {
    e.preventDefault();
  
    const currentDate = new Date(); // Get the current date
  
    fetch("http://localhost:5000/api/addorder", {
      method: "POST",
      body: JSON.stringify({
        uID: uID,
        fname: firstName.value,
        lname: lastName.value,
        country: country.value,
        address: address.value,
        city: city.value,
        postal: postal.value,
        phone: phone.value,
        email: email.value,
        price: tPrice.innerHTML,
        date: currentDate, // Include the current date in the request body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(async (res) => {
        firstName.value = "";
        lastName.value = "";
        country.value = "";
        address.value = "";
        city.value = "";
        postal.value = "";
        email.value = "";
  
        location.replace("./order_detail.html");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  


submitbtn.addEventListener('submit',addOrder)

// document.getElementById('conform_btn').addEventListener('submit',addOrder)



