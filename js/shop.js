
// State
let cart = JSON.parse(localStorage.getItem('air_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('air_wishlist')) || [];

// Constants
const CURRENCY = '₹';

// --- SHOP UI RENDERER ---

class ShopUI {
    constructor(products) {
        this.products = products;
        this.grid = document.querySelector('.product-grid');
        this.filters = {
            category: null,
            type: 'all',
            tag: 'all', // New filter
            sort: 'default' // New sort
        };
    }

    init(category = null) {
        if (!this.grid) return;
        this.filters.category = category;
        this.initListeners();
        this.render();
    }

    getFilteredProducts() {
        let result = this.products.filter(p => {
            const matchCat = this.filters.category ? p.category === this.filters.category : true;
            const matchType = this.filters.type === 'all' ? true : p.type === this.filters.type;
            const matchTag = this.filters.tag === 'all' ? true : p.tag === this.filters.tag;
            return matchCat && matchType && matchTag;
        });

        // Sorting Logic
        if (this.filters.sort === 'priceLow') {
            result.sort((a, b) => a.price - b.price);
        } else if (this.filters.sort === 'priceHigh') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }

    render() {
        const filtered = this.getFilteredProducts();
        if (filtered.length === 0) {
            this.grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#888;">No products found.</p>';
        } else {
            this.grid.innerHTML = filtered.map(product => this.createProductCard(product)).join('');
            this.attachCardEvents();
        }
    }

    createProductCard(product) {
        const isFav = wishlist.some(item => item.id === product.id) ? 'active' : '';

        // Determine tag badge color based on text
        let badgeClass = 'tag-new';
        if (product.tag === 'Old Collection') badgeClass = 'tag-old';
        if (product.tag === 'Extra Discounted') badgeClass = 'tag-discount';

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="card-inner">
                    <div class="card-front">
                        <!-- Tag Badge -->
                        ${product.tag ? `<span class="product-tag ${badgeClass}">${product.tag}</span>` : ''}
                        
                        <div class="card-image">
                            <img src="${product.image}" alt="${product.name}">
                            <button class="wishlist-btn ${isFav}" onclick="toggleWishlist('${product.id}', event)">
                                ♥
                            </button>
                        </div>
                        <div class="card-info">
                            <h4>${product.name}</h4>
                            <p class="category">${product.type}</p>
                            <p style="font-size:0.75rem; color:#aaa; margin-top:5px;">Best for: ${product.useCase}</p>
                            <div class="price-row">
                                <span class="price">${CURRENCY}${product.price}</span>
                                <a href="product.html?id=${product.id}" class="view-btn">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    attachCardEvents() {
        // 3D Tilt Effect
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -10; // Max -10 to 10 deg
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    initListeners() {
        const typeSelect = document.getElementById('typeFilter');
        const tagSelect = document.getElementById('tagFilter');
        const sortSelect = document.getElementById('sortFilter');

        if (typeSelect) {
            typeSelect.addEventListener('change', (e) => {
                this.filters.type = e.target.value;
                this.render();
            });
        }

        if (tagSelect) {
            tagSelect.addEventListener('change', (e) => {
                this.filters.tag = e.target.value;
                this.render();
            });
        }

        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.filters.sort = e.target.value;
                this.render();
            });
        }
    }
}

// --- CART & WISHLIST LOGIC ---

function addToCart(productId, quantity = 1, size = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (!size) {
        alert("Please select a size.");
        return;
    }

    const cartItem = cart.find(item => item.id === productId && item.size === size);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity, size });
    }

    updateStorage();
    alert('Added to cart!');
}

function toggleWishlist(productId, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        if (event) event.target.classList.remove('active');
    } else {
        const product = products.find(p => p.id === productId);
        wishlist.push(product);
        if (event) event.target.classList.add('active');
    }
    updateStorage();
}

function updateStorage() {
    localStorage.setItem('air_cart', JSON.stringify(cart));
    localStorage.setItem('air_wishlist', JSON.stringify(wishlist));
    updateCartCount();
}

function updateCartCount() {
    const navCart = document.querySelector('.nav-cart-count');
    if (navCart) {
        const count = cart.reduce((acc, item) => acc + item.quantity, 0);
        navCart.innerText = count;
    }
}

// Global Init
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
