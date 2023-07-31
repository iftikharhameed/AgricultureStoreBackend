const orderCont = document.getElementById('bord_order');
const customerCont = document.getElementById('dash_customer');
const totalcustomer = document.getElementById('total_customer');
const totalorder = document.getElementById('total_order');

const getAllOrder = async () => {
  const res = await fetch('http://localhost:5000/api/getAllOrder', { method: 'GET' });
  const products = await res.json();

  products.sort((a, b) => new Date(b.date) - new Date(a.date));

  var orderStr = '';
  var customerStr = '';

  let count = products.length;
  let customerCountValue = products.length;

  products.slice(0, 5).forEach(item => {
    orderStr += `
      <tr>
        <td>${item.fname} ${item.lname}</td>
        <td>${item.date}</td>
        <td>
          <span class="status orange"></span>
          review
        </td>
      </tr>
    `;
    // count++; // Increment the counter for each order displayed
  });
  orderCont.innerHTML = orderStr;

  products.slice(0, 5).forEach(item => {
    customerStr += `
      <div class="customer">
        <div class="info">
          <img src="images/poster1.jpg" width="40px" height="40px" alt="">
          <div>
            <h4>${item.fname} ${item.lname}</h4>
            <small>${item.city}</small>
          </div>
        </div>
        <div class="contact">
          <a href="admin_customer.html"><span class="las la-user-circle"></span></a>
          <a href="admin1.html"><span class="las la-comment"></span></a>
        </div>
      </div>
    `;
    // customerCountValue++;
  });
  customerCont.innerHTML = customerStr;

  // Set the order count in the variable and display it
  totalorder.textContent = count.toString();
  totalcustomer.textContent = customerCountValue.toString();
};

getAllOrder();
