window.onload = () =>{

    let user = JSON.parse(localStorage.data || null);

    if(user == null){
        location.replace('./index.html')
    }
}




const orderCont=document.getElementById('user-order')
const userdataID=JSON.parse(localStorage.getItem("data"))

const getAllOrder = async()=>{


    const res=await fetch('http://localhost:5000/api/getAllOrder',{method:'GET'})
    const products=await res.json()

    var orderStr=""
    products.forEach(item => {

        if (item.uID === userdataID._id) {

        orderStr += `
        <tr>
                <td>#341</td>
                <td>${item.fname + item.lname}</td>
                <td>${item.address}</td>
                <td>${item.phone}</td>
                <td>Rs ${item.price}</td>
                <td>${item.date}</td>
                <td style="position: relative;"><span class="pe"></span>Pending</td>
                </i></td>
            </tr>
        `
        }
        
    });
    orderCont.innerHTML=orderStr

}
getAllOrder()




