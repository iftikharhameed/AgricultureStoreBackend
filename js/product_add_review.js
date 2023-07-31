const rHead=document.getElementById('reviewHead')
const rBody=document.getElementById('reviewBody')
const submitbtn=document.getElementById('addreviewform')



const addReview=async(e)=>{
    e.preventDefault()

    var flag=true
    if(rHead.value.trim().length < 5){
        alert("head must be greater then 5 letters and no space is allowed")
        flag=false
        return
    }

    else if(rBody.value.trim().length < 10){
        alert("Detail must be greater then 10 letters and no space is allowed")
        flag=false
        return
    }


 if(flag)
 {


    fetch("http://localhost:5000/api/addreview",{

   // Adding method type
    method: "POST",

    // adding content to send

    body: JSON.stringify({
        R_head:rHead.value,
        R_body:rBody.value,
    }),

    

headers:{
    "Content-type": "application/json; charset=UTF-8"
}




})}

    rHead.value="",
    rBody.value=""

    alert("Review Added")


}


submitbtn.addEventListener('submit',addReview)




