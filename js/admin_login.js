

const adminlogin=async(e)=>{
    e.preventDefault()
    var adminEmail = document.getElementById("adminEmail").value;
    var adminPass = document.getElementById("adminPassword").value;   
    // POST request using fetch()
 fetch("http://localhost:5000/api/admin", {
 
// Adding method type
method: "POST",
 
// Adding body or contents to send
body: JSON.stringify({
    email:adminEmail,
    password:adminPass,
}),
 
// Adding headers to the request
headers: {
    "Content-type": "application/json; charset=UTF-8"
}
}).then(async(res)=>{
    const data= await res.json()
    console.log(data);
    if(data.status){

        localStorage.setItem("admin", JSON.stringify (data.user))
        location.replace('./admin.html')
    }else{
        // console.log("invalid credentials");
        alert('Username OR Password is incorrect')
    }


}).catch((error)=>{
    console.log(error);

})

}


document.getElementById('adminFormSubmit').addEventListener('submit',adminlogin)





