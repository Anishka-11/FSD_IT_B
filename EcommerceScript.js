// Define products and cart
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
];

let cart = [];

// DOM elements
const cartCount = document.getElementById('cartCount');
const cartItemsList = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const cartModal = document.getElementById('cartModal');
const viewCartButton = document.getElementById('viewCartButton');
const closeCartButton = document.getElementById('closeCart');

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Update cart view
function updateCart() {
    cartCount.textContent = cart.length;
    updateCartItems();
    updateTotalPrice();
}

// Update cart items display
function updateCartItems() {
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });
}

// Update total price display
function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = total.toFixed(2);
}

// Show or hide cart modal
viewCartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Add event listeners to 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = parseInt(e.target.closest('.product').getAttribute('data-id'));
        addToCart(productId);
    });
});

// Initial setup: display the products and set up cart
updateCart();
