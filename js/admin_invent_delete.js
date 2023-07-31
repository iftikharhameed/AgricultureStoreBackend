
  async function deleted(id){
  
    // POST request using fetch()
  try{
      fetch(`http://localhost:5000/api/deleteproduct/${id}`,  {
 
// Adding method type
method: "DELETE",
 
// Adding body or contents to send
body: JSON.stringify({
    P_id:id,
   

    
}),
 
// Adding headers to the request
headers: {
    "Content-type": "application/json; charset=UTF-8"
}
})


alert("Product Deleted")

}
  catch(error)
  {
     console.log(error);

  }
 

}
