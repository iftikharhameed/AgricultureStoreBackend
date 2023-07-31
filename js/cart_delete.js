
async function deleted(id){
  
    // POST request using fetch()
  try{
      fetch(`http://localhost:5000/api/deletecart/${id}`,  {
 
// Adding method type
method: "DELETE",
 
// Adding body or contents to send
body: JSON.stringify({
    uID:id,
   

    
}),
 
// Adding headers to the request
headers: {
    "Content-type": "application/json; charset=UTF-8"
}
})


alert("Item Deleted")
console.log(id);


}
  catch(error)
  {
     console.log(error);

  }
 

}
