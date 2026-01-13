
# Project Prompt: Premium Scroll-Animated E-Commerce Site

**Role:** Expert Frontend Web Developer (Specializing in Creative Interaction & Performance)

**Goal:** Build a high-performance, premium product website featuring a scroll-controlled 3D animation, split-screen storytelling layout, and a functional vanilla JS e-commerce system.

---

## 1. Tech Stack (Strict Constraints)
- **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+).
- **No Frameworks:** No React, Vue, Three.js, or GSAP. Use native APIs only.
- **Rendering:** Use HTML5 `<canvas>` for the frame-based scroll animation.
- **Data:** Use a local JavaScript array (mock database) and `localStorage` for cart management.

---

## 2. Core Visual Experience

### A. The "Hero" Scroll Animation
- **Mechanism:** A sequence of JPG frames rendered on a `<canvas>`.
- **Interaction:** The animation must be controlled by the scrollbar.
- **Positioning:** The canvas container must use `position: sticky` to remain pinned while the user scrolls through the timeline.
- **Quality Control:** 
  - **Native Resolution:** Do NOT upscale images. Canvas width must match image natural width.
  - **Sharpness:** Disable image smoothing (`dithering`) in the canvas context for crisp edges.
  - **Loading:** Preload images using a JavaScript class to prevent flickering.

### B. The Layout (Split Screen)
- **Desktop:**
    - **Left Side (45%):** Storytelling text. Includes Product Title, Tagline, Rating bars, Use-Case lists, and CTA.
    - **Right Side (55%):** The 3D Scroll Animation (Canvas). Centered and sharp.
- **Mobile:**
    - Vertical Stack: Text content on top, Animation below.

### C. Aesthetic Style
- **Theme:** Dark/Premium (Blacks, Dark Greys, White Text).
- **Typography:** 'Inter' from Google Fonts.
- **Components:**
    - **Navigation:** Glassmorphism effect, fixed header.
    - **Side Drawer:** A slide-out menu (right side) for "About", "Contact", and category links.
    - **Product Cards:** Dark cards with 3D hover tilt effect (perspective transform). **Stable Imagery:** Do not swap images on hover; keep the main image visible.

---

## 3. Functionality Requirements

### A. Data Structure (`js/products.js`)
- Create a `products` array with **10 items per category**.
- **Currency:** Strictly use **Indian Rupee (₹)** for all prices.
- **Images:** Use local assets stored in dedicated folders (e.g., `mens extra footwear/`, `womens extra footwear/`). Do not use random internet URLs.
- **Schema:**
  ```javascript
  {
      id: 'p1',
      name: 'Velocity Prime',
      price: 4999, // In INR
      category: 'men',
      type: 'running',
      image: 'mens extra footwear/mens1.png', // Local path
      rating: 4.8,
      useCase: 'Marathon Running' // Mandatory context field
  }
  ```

### B. Shop Logic (`js/shop.js`)
- **Grid Rendering:** Dynamic generation of HTML based on the `products` array.
- **Card Content:** Must display Title, Price (₹), Category, and **"Best for: [Use Case]"**.
- **Filtering:** Filter by Price Range (Slider values in ₹) and Product Type.
- **Cart System:** 
  - storage: `localStorage` key `'cart'`.
  - features: Add to cart, update badge count in header, remove item on cart page, total calculation in ₹.

### C. Architecture (Modular)
- `index.html`: Landing page (Split layout + Animation).
- `css/style.css`: All styles (Global variables, Layout, Animation, Grid).
- `js/scrollAnimation.js`: Reusable class for the canvas logic.
- `js/navigation.js`: Injects the Side Drawer HTML/JS into every page.
- `js/products.js`: The database file.
- `js/shop.js`: Logic for the grid, filters, and cart.

---

## 4. Implementation Steps for the AI
1.  **Scaffolding:** Set up the structure with Split Layout wrappers.
2.  **Animation Engine:** implement `ScrollAnimator` with strict native-resolution rendering.
3.  **Data Layer:** Populate `products.js` with local image paths and realistic INR prices.
4.  **E-Commerce Layer:** Build the Product Grid with 3D tilt cards, ensuring no hover image swapping to prevent layout shifts/blunders.
5.  **Refinement:** Verify all currency symbols are ₹ and side menu works globally.

---

**Instruction to AI:** Generate the full codebase following these strict visual and functional guidelines.
