// Cart logic as before
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    const totalPriceElem = document.getElementById('total-price');
    cartContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemElem = document.createElement('div');
        itemElem.classList.add('cart-item');
        itemElem.innerHTML = `
            <p><strong>${item.name}</strong></p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemElem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);
}

// Ensure addToCart is globally accessible
window.addToCart = function(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Added to cart:", product);
};


function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Render cart on load if cart.html exists
if (document.getElementById('cart-container')) {
    renderCart();
}
