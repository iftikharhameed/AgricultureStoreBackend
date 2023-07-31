const productsCont=document.getElementById('users')

const getAllUsers = async()=>{


    const res=await fetch('http://localhost:5000/api/getAllUsers',{method:'GET'})
    const products=await res.json()

    var productStr=""
    products.forEach(item => {

        productStr += `
        <tr >
                            <td>#341</td>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.phone}</td>
                            <td>${item.dob}</td>
                            <td>${item.password}</td>
                            <td style="position: relative;">${item.gender}</td>
                            <td style="position: relative;">${item.country}</td>
                            
                        </tr>
        `
        
    });
    productsCont.innerHTML=productStr

}
getAllUsers()