const orderCont=document.getElementById('customer')

const getAllCustomer = async()=>{


    const res=await fetch('http://localhost:5000/api/getAllOrder',{method:'GET'})
    const customer=await res.json()

    var customerStr=""
    customer.forEach(item => {

        customerStr += `
        <tr>
                            <td>${item.fname} ${item.lname}</td>
                            <td>${item.address}</td>
                            <td>${item.phone}</td>
                            <td>${item.country}</td>
                            <td>${item.city}</td>
                            <td>${item.postal}</td>
                        </tr>
        `
        
    });
    orderCont.innerHTML=customerStr

}

getAllCustomer()

