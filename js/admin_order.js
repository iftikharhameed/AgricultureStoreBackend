const orderCont=document.getElementById('orders')

const getAllOrder = async()=>{


    const res=await fetch('http://localhost:5000/api/getAllOrder',{method:'GET'})
    const products=await res.json()

    var orderStr=""
    products.forEach(item => {

        orderStr += `
        <tr>
                            <td>#341</td>
                            <td>${item.fname + item.lname}  </td>
                            <td>${item.address}</td>
                            <td>${item.date}</td>
                            <td>${item.price}</td>
                            <td style="position: relative;"><span class="pe"></span>Pending</td>
                            <td><i class="fa fa-gear ticon"> &nbsp; <i class="fa fa-angle-down ticon">
                            </i></td>
                        </tr>
        `
        
    });
    orderCont.innerHTML=orderStr

}
getAllOrder()


