// Sample product data
const products = [
    { id: 1, name: "Moderne Bank", price: "€899", category: "woonkamer", image: "🛋️" },
    { id: 2, name: "Eikenhouten Eettafel", price: "€1.299", category: "eetkamer", image: "🪑" },
    { id: 3, name: "Comfortabel Bed", price: "€699", category: "slaapkamer", image: "🛏️" },
    { id: 4, name: "Ergonomische Bureaustoel", price: "€399", category: "kantoor", image: "💺" },
    { id: 5, name: "Design Salontafel", price: "€449", category: "woonkamer", image: "🪑" },
    { id: 6, name: "Kledingkast", price: "€599", category: "slaapkamer", image: "🚪" },
    { id: 7, name: "Bureau", price: "€349", category: "kantoor", image: "🖥️" },
    { id: 8, name: "Eethoek Set", price: "€799", category: "eetkamer", image: "🍽️" }
];

let cart = [];
let currentFilter = 'all';

// Load products
function loadProducts(filter = 'all') {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Toevoegen aan Winkelwagen
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Filter products by category
function filterProducts(category) {
    currentFilter = category;
    loadProducts(category);
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        // Simple feedback
        alert(`${product.name} toegevoegd aan winkelwagen!`);
    }
}

// Update cart count
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

// Toggle cart (placeholder)
function toggleCart() {
    if (cart.length === 0) {
        alert('Uw winkelwagen is leeg');
    } else {
        let cartItems = cart.map(item => `${item.name} - ${item.price}`).join('\n');
        alert(`Winkelwagen:\n${cartItems}`);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
loadProducts();