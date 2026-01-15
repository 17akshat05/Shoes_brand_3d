# AIR Footwear - 3D Scroll Experience 👟✨

![AIR Footwear Banner](https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop)
<!-- Replace with an actual screenshot of your site if available -->

> **"Experience the Future of Footwear"**

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c7c9a0-9b8a-4b9a-8b9a-9b8a9b9a9b9a/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

---

## 🚀 Project Overview

**AIR Footwear** is a cutting-edge e-commerce concept site that pushes the boundaries of web interactions. The highlight is a **high-performance 3D product showcase** that is fully controlled by the user's scroll. 

Unlike heavy 3D libraries (like Three.js) that can slow down load times, this project uses a highly optimized **Sequence of 72 JPG Images** rendered on an HTML5 Canvas. This ensures:
- 🏎️ **60 FPS Performance** on most devices.
- 📱 **Seamless Mobile Experience**.
- ⚡ **Instant Load Times** compared to full 3D models.

---

## 🧱 Tech Stack

Built with a focus on **Performance** and **Vanilla** technologies. No heavy frameworks.

| Tech | Description |
| :--- | :--- |
| **HTML5** | Semantic structure and layout. |
| **CSS3** | Modern styling, Flexbox, Grid, and Animations. |
| **Vanilla JS** | Core logic for scroll interaction, cart management, and routing. |
| **HTML Canvas** | Hardware-accelerated image drawing for the 3D rotation effect. |
| **Vercel/Netlify** | Fast global deployment. |

---

## ⚙️ How It Works (The Magic)

The core feature is the **Scroll-Linked Animation**. Here's the engineering behind it:

1.  **Frame Extraction**: A high-resolution 360° video of the shoe was converted into **72 individual JPG frames** (24fps).
2.  **Canvas Rendering**: Instead of loading a 3D model, we load these images into an HTML5 `<canvas>`.
3.  **Scroll Listener**: JavaScript listens to the user's window scroll event.
4.  **Math Mapping**: We map the scroll percentage (0% to 100% of the section) to the frame index (0 to 71).
    ```javascript
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );
    ```
5.  **RequestAnimationFrame**: The canvas updates essentially instantly, creating a smooth "video-like" scrubbing effect.

---

## ✨ Key Features

- **👟 Interactive 3D Scroll**: Rotate the product 360° just by scrolling.
- **📱 Fully Responsive**: Optimized layouts for Mobile, Tablet, and Desktop.
- **🛒 Dynamic Cart System**: Add to cart, update quantities, and live price calculation.
- **🎨 Modern aesthetics**: Glassmorphism, smooth typography (Inter font), and minimalist UI.
- **⚡ Performance First**: Pre-loading images for lag-free interaction.
- **📂 Clean Codebase**: Modular JavaScript (`shop.js`, `scrollAnimation.js`).

---

## 🐛 Challenges & Issues Faced

Developing a high-fidelity animation without libraries came with challenges:

-   **Image Preloading**: Initially, images would flicker on scroll. **Fix**: Implemented a preloader that caches all 72 frames before the animation starts.
-   **Mobile Performance**: High-res images caused lag on older phones. **Fix**: Used `window.requestAnimationFrame` to limit redraws and optimized image compression.
-   **Z-Index Management**: Keeping the canvas "sticky" while content scrolled over it required precise CSS stacking contexts.

---

## 🚀 Areas for Improvement

There is always room to grow! Future updates might include:

-   [ ] **WebP Support**: Convert images to WebP for 30% faster load times.
-   [ ] **Inertia Scrolling**: Add momentum to the rotation after the user stops scrolling.
-   [ ] **Color Variants**: Allow users to switch shoe colors and load a different Frame sequence.
-   [ ] **Backend Integration**: Connect to Stripe for real payments.

---

## 💿 Installation & Usage

Want to run this locally?

1.  **Clone the repo**
    ```bash
    git clone https://github.com/17akshat05/Shoes_brand_3d.git
    ```
2.  **Navigate to the directory**
    ```bash
    cd Shoes_brand_3d
    ```
3.  **Run it**
    -   Simply open `index.html` in your browser.
    -   OR use VS Code's "Live Server" extension for the best experience.

---

## 📬 Contact

If you have any questions or want to collaborate, feel free to reach out!

**Akshat Jain**  
📧 Email: [17akshat05@gmail.com](mailto:17akshat05@gmail.com)  
🐙 GitHub: [@17akshat05](https://github.com/17akshat05)

---

<p align="center">
  Made with ❤️ and a lot of ☕ by Akshat.
</p>
