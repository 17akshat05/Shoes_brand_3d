
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Sidebar HTML
    // We put backdrop OUTSIDE the drawer div for easier CSS handling
    const drawerHTML = `
        <div id="drawer-backdrop" class="drawer-backdrop"></div>
        <div id="side-drawer" class="side-drawer">
            <div class="drawer-header">
                <h2>Menu</h2>
                <button id="close-drawer" class="close-btn">&times;</button>
            </div>
            
            <div class="drawer-content">
                <div class="drawer-section">
                    <h3>Shop</h3>
                    <ul class="drawer-links">
                        <li><a href="men.html">Men's Collection</a></li>
                        <li><a href="women.html">Women's Collection</a></li>
                        <li><a href="kids.html">Kids' Collection</a></li>
                        <li><a href="cart.html">Your Cart</a></li>
                    </ul>
                </div>

                <div class="drawer-section">
                    <h3>About AIR</h3>
                    <p style="color:#aaa; font-size:0.9rem; line-height:1.5;">We engineer the world's lightest performance footwear using aerospace-grade materials. Born in 2024, designed for zero-gravity feel.</p>
                </div>

                <div class="drawer-section">
                    <h3>Contact</h3>
                    <ul class="contact-info">
                        <li>📧 17akshat05@gmail.com</li>
                        <li>📍 Jaipur, near JECRC University</li>
                    </ul>
                </div>

                <div class="drawer-footer">
                    <a href="https://www.instagram.com/17akshat05/" target="_blank" class="social-link">Instagram</a>
                    <a href="https://www.linkedin.com/in/17akshat05/" target="_blank" class="social-link">LinkedIn</a>
                    <a href="https://github.com/17akshat05" target="_blank" class="social-link">GitHub</a>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', drawerHTML);

    // 2. Event Listeners
    const menuBtn = document.querySelector('.menu-btn');
    const drawer = document.getElementById('side-drawer');
    const closeBtn = document.getElementById('close-drawer');
    const backdrop = document.getElementById('drawer-backdrop');

    function openDrawer() {
        drawer.classList.add('open');
        backdrop.classList.add('visible'); // Handle backdrop visibility class
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        backdrop.classList.remove('visible');
        document.body.style.overflow = '';
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openDrawer();
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
});
