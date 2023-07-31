window.onload = () =>{
    
    const usserID=JSON.parse(localStorage.getItem("admin"))


    let admin = JSON.parse(localStorage.admin || null);

    if(admin == null){
        location.replace('./index.html')
    }
}






let adminData=""
const getUserDetail=()=>{
    if(localStorage.getItem("admin"))
    {
        
        adminData=JSON.parse(localStorage.getItem("admin"))
        document.getElementById('adminloginfo').innerText = adminData.name + adminData.lastName
        
    }


}

document.addEventListener('DOMContentLoaded',()=>{

    
    getUserDetail()

    // getCartDetail()

    document.getElementById('adminlogout').onclick = () =>{
        localStorage.clear()
        location.replace('./index.html')
    }
    
    



})






