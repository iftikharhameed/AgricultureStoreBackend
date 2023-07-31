window.onload = () =>{
    
    if(localStorage.getItem("data")){
        location.replace('./index.html')
    }

}



const firstName=document.getElementById('fname')
const lastName=document.getElementById('lname')
const email=document.getElementById('email')
const dob=document.getElementById('dob')
const password=document.getElementById('password')
const phone=document.getElementById('phoneNo')
const gender=document.getElementById('gender')
const country=document.getElementById('country')
const submitbtn=document.getElementById('adduser')

const addUser=async(e)=>{
    e.preventDefault()
    var flag=true
    if(firstName.value.trim().length < 3){
        alert("Firt Name must be greater then 3 letters and no space is allowed")
        flag=false
        return
    }

    else if(lastName.value.trim().length < 3){
        alert("Last Name must be greater then 3 letters and no space is allowed")
        flag=false
        return
    }
    else if(password.value.trim().length < 5){
        alert("password must be greater then 5 letters and no space is allowed")
        flag=false
        return
    }
    

 if(flag)
 {

    // POST request using fetch()
 fetch("http://localhost:5000/api/addUser", {
 
// Adding method type
method: "POST",
 
// Adding body or contents to send
body: JSON.stringify({
    name:firstName.value,
    lastName:lastName.value,
    email:email.value,
    password:password.value,
    phone:phone.value,
    gender:gender.value,
    country:country.value,
    dob:dob.value

    
}),
 
// Adding headers to the request
headers: {
    "Content-type": "application/json; charset=UTF-8"
}
}).then(async(res)=>{
    const data= await res.json()
    localStorage.setItem("data", JSON.stringify (data.user))

    firstName.value="",
    lastName.value=""
    email.value="",
    password.value="",
    phone.value="",
    gender.value="",
    country.value="",
    dob.value="",

    // alert('user added successful');
    location.replace('./index.html')


}).catch((error)=>{
    console.log(error);

})

}
}







submitbtn.addEventListener('submit',addUser)
