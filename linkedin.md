
# 🚀 LIVE: AIR Footwear – Premium 3D E-Commerce Experience

I’m thrilled to announce the launch of **AIR Footwear**, a high-performance e-commerce concept site featuring immersive 3D scroll animations and a custom-built shopping engine.

🌐 **Live Demo:** [https://17akshat05.github.io/Shoes_brand_3d/](https://17akshat05.github.io/Shoes_brand_3d/)
💻 **Source Code:** [GitHub Repository](https://github.com/17akshat05/Shoes_brand_3d)

---

### �️ The Tech Stack (No Frameworks!)
Built purely with **Vanilla JavaScript**, **HTML5 Canvas**, and **CSS3**.
- **Rendering:** Custom Frame Buffer optimization for 60FPS scroll.
- **State Management:** `localStorage` based Cart & Wishlist.
- **Styling:** CSS Variables & Glassmorphism (No Tailwind/Bootstrap).

### 🤖 The AI Power Team
This project was an experiment in **AI-Native Development**. I collaborated with next-gen tools to accelerate production:
- **Anti-Gravity AI:** My primary co-pilot for architecture, complex logic, and real-time debugging.
- **Google Gemini:** Conceptual planning and asset generation.
- **ChatGPT:** Brainstorming creative copy and sorting algorithms.
- **Ezgif:** Optimizing high-res frame sequences for the web.

---

### 💡 Challenges & Solutions: A deeper dive
Building a "Awwwards-level" site usually requires libraries like Three.js. Doing it with native code came with unique challenges:

**1. The "Blurry Canvas" Problem**
*   **Issue:** When rendering the 3D scroll frames on high-DPI screens (Retina displays), the animation looked pixelated and blurry.
*   **Solution:** I wrote a custom `ScrollAnimator` class that detects the device's native resolution and explicitly disables `imageSmoothingEnabled` on the canvas 2D context. This forced crisp, pixel-perfect rendering without upscaling artifacts.

**2. The "Invisible Button" UI Bug**
*   **Issue:** On the product detail page, the "Add to Cart" button disappeared because of a CSS specificity conflict (White Text on White Background).
*   **Solution:** Debugged the cascade hierarchy and enforced a high-contrast style override, ensuring accessibility and clear CTA visibility across all themes.

**3. Visual Consistency & "Ghost" Images**
*   **Issue:** The product grid originally swapped images on hover, but mismatched assets caused layout shifts and confusing visuals ("blunder images").
*   **Solution:** Re-engineered the product database (`products.js`) to strictly map unique, high-quality local assets to each card, locking the view to a stable, premium presentation.

**4. Interactive Z-Index Layering**
*   **Issue:** The 3D Tilt effect on cards was trapping touch events, making the "View" buttons unclickable on mobile.
*   **Solution:** Refactored the CSS stacking context, elevating the interactive elements (`z-index: 5`) above the tilt container to guarantee responsive clicks.

---

### 🎯 Key Features Implemented
✅ **Smart Split-Screen Layout:** Storytelling on the left, 3D Visuals on the right.
✅ **Localized Commerce:** Full INR (₹) sizing and pricing logic.
✅ **Advanced Filtering:** Sorting by Price & Collections (New/Discounted).
✅ **Performance:** Zero-dependency, lightweight, and fast.

I'd love to hear your thoughts on the design and performance! Drop a comment below. 👇

#WebDevelopment #FrontendDeveloper #VanillaJS #CreativeCoding #HTML5Canvas #GenerativeAI #AntiGravity #GoogleGemini #Ecommerce #WebDesign #OpenSource #HireMe #AkshatJain #3DWeb
