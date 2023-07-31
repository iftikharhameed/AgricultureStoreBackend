// Products data
const products = [
	{
		id: 1,
		name: 'Product 1',
		description: 'Description of Product 1.',
		image: 'product1.jpg',
		price: 10.00
	},
	{
		id: 2,
		name: 'Product 2',
		description: 'Description of Product 2.',
		image: 'product2.jpg',
		price: 20.00
	},
	{
		id: 3,
		name: 'Product 3',
		description: 'Description of Product 3.',
		image: 'product3.jpg',
		price: 30.00
	}
];

// Cart data
let cart = [];

// Get DOM elements
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');

const checkoutCustomerName = document.getElementById('customer-name');
const checkoutTotal = document.getElementById('checkout-total');
// const submitOrderButton = document.getElementById('submit-order-button');

const checkoutButton = document.getElementById('checkout-button');


// Render products
function renderProducts() {
	const productsContainer = document.getElementById('products');
	productsContainer.innerHTML = '';

	products.forEach((product) => {
		const productElement = document.createElement('li');
		productElement.innerHTML = `
			<h3>${product.name}</h3>
			<img src="images/${product.image}" alt="${product.name}">
			<p>${product.description}</p>
			<p>$${product.price.toFixed(2)}</p>
			<button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
		`;
		productsContainer.appendChild(productElement);
	});
}

// Add to cart
function addToCart(id, name, price) {
	const existingCartItem = cart.find((item) => item.id === id);

	if (existingCartItem) {
		existingCartItem.quantity++;
	} else {
		cart.push({
			id,
			name,
			price,
			quantity: 1
		});
	}

	renderCart();
}







// Remove from cart
function removeFromCart(id) {
	const cartItemIndex = cart.findIndex((item) => item.id === id);

	if (cartItemIndex >= 0) {
		const cartItem = cart[cartItemIndex];

		if (cartItem.quantity > 1) {
			cartItem.quantity--;
		} else {
			cart.splice(cartItemIndex, 1);
		}

		renderCart();
	}
}

// Render cart
function renderCart() {
	cartItemsContainer.innerHTML = '';

	cart.forEach((item) => {
		const cartItemElement = document.createElement('tr');
		cartItemElement.innerHTML = `
			<td>${item.name}</td>
			<td>${item.price.toFixed(2)}</td>
			<td>
				<button onclick="removeFromCart(${item.id})">-</button>
				${item.quantity}
				<button onclick="addToCart(${item.id}, '${item.name}', ${item.price})">+</button>
			</td>
			<td>$${(item.price * item.quantity).toFixed(2)}</td>
		`;

		cartItemsContainer.appendChild(cartItemElement);
	});

	const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
	cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
}




// Initialize
renderProducts();


