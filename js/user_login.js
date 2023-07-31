

const loginUser=async(e)=>{
    e.preventDefault()
    var email = document.getElementById("email").value;
    var pass = document.getElementById("passward").value;   
    // POST request using fetch()
 fetch("http://localhost:5000/api/login", {
 
// Adding method type
method: "POST",
 
// Adding body or contents to send
body: JSON.stringify({
    email:email,
    password:pass,
}),
 
// Adding headers to the request
headers: {
    "Content-type": "application/json; charset=UTF-8"
}
}).then(async(res)=>{
    const data= await res.json()
    console.log(data);
    if(data.status){

        localStorage.setItem("data", JSON.stringify (data.user))
        location.replace('./index.html')
    }else{
        // console.log("invalid credentials");
        alert('invalid email or password')
    }


}).catch((error)=>{
    console.log(error);

})

}


document.getElementById('loginFormSubmit').addEventListener('submit',loginUser)





