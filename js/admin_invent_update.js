// Get the value of the 'id' query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const proid = urlParams.get('id');

// Use the 'id' variable as needed
console.log(proid);

const updateProduct = async () => {
  try {
    const P_type = document.getElementById('producttype').value;
    const P_name = document.getElementById('name').value;
    const P_price = document.getElementById('price').value;
    const P_quantity = document.getElementById('quantity').value;
    const P_cat = document.getElementById('category').value;
    const P_images = document.getElementById('image').value;

    const response = await fetch(`http://localhost:5000/api/updateproduct/${proid}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        P_type,
        P_name,
        P_price,
        P_quantity,
        P_cat,
        P_images
      })
    });

    if (response.ok) {
      // Update successful
      // console.log("Product updated successfully!");
      alert("Product updated successfully!")
      // Reset input fields
      document.getElementById('producttype').value = "";
      document.getElementById('name').value = "";
      document.getElementById('price').value = "";
      document.getElementById('quantity').value = "";
      document.getElementById('category').value = "";
      document.getElementById('image').value = "";

      // Display the image
      const imageLabel = document.getElementById('imageLabel');
      imageLabel.innerHTML = ""; // Clear previous image

      const img = document.createElement("img");
      img.src = P_images;
      img.alt = "Product Image";
      imageLabel.appendChild(img);
    } else {
      // Update failed
      console.log("Failed to update product.");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', function (event) {
  event.preventDefault();
  updateProduct();
});
