# 3D Scroll-Based Shoes Website 👟

A modern, high-performance shoes website featuring a **scroll-controlled 3D product overview** built using **24 FPS JPG frames extracted from video**.  
Optimized for **desktop and mobile**, with **no external libraries**.

---

## 🔥 Key Features

- Scroll-controlled 3D shoe animation
- Frame-by-frame animation using JPG images (24 FPS)
- Canvas-based rendering for performance
- Sticky / pinned hero animation section
- Separate pages for **Men, Women, Kids**
- Fully responsive (Laptop + Mobile)
- Netlify deployable
- No frameworks, no libraries

---

## 🧱 Tech Stack (STRICT)

- HTML
- CSS
- Vanilla JavaScript
- `<canvas>` for animation rendering

❌ No React  
❌ No Three.js  
❌ No GSAP  
❌ No UI libraries  

---

## 📁 Project Structure

/
├── assets/
│ └── shoes/
│ ├── shoes_0001.jpg
│ ├── shoes_0002.jpg
│ ├── shoes_0003.jpg
│ └── shoes_0XXX.jpg
│
├── css/
│ └── style.css
│
├── js/
│ └── scrollAnimation.js
│
├── index.html
├── men.html
├── women.html
├── kids.html
└── README.md


---

## 🎞 Image / Frame Setup

- Frames are generated from a **video converted using ezgif**
- Frame rate: **24 FPS**
- Format: JPG
- Folder: `/assets/shoes/`
- Naming convention:
shoes_0001.jpg
shoes_0002.jpg
shoes_0003.jpg
...
shoes_0XXX.jpg


> Total frames = `video duration × 24`

All frames must:
- Have consistent lighting
- Use the same background
- Be center-aligned
- Use same resolution

---

## 🌀 Scroll-Based 3D Animation Logic

- Animation is **NOT autoplay**
- Frames progress based on **scroll position**
- One full scroll section = full 3D rotation
- Animation section is:
  - Pinned / sticky
  - Fullscreen
- After last frame:
  - Normal page scrolling resumes

### Core Logic
- Scroll percentage → frame index
- `requestAnimationFrame` for smooth rendering
- Frames drawn to `<canvas>`
- Frame index clamped safely

---

## 📱 Responsive Optimization

### Desktop / Laptop
- High-resolution canvas
- Smooth scroll-frame sync
- Full 3D depth feel

### Mobile
- Auto-scaled canvas
- Reduced redraw frequency
- Touch-scroll optimized
- Aspect ratio preserved

---

## 🧩 Pages Included

### Homepage (`index.html`)
1. Sticky Header
   - Logo
   - Men | Women | Kids
   - Cart Icon
2. Fullscreen 3D Scroll Animation (Canvas)
3. Men Shoes Section
4. Women Shoes Section
5. Kids Shoes Section
6. Footer

### Category Pages
- `men.html`
- `women.html`
- `kids.html`

Each includes:
- Product grid
- CSS 3D hover tilt (`rotateX`, `rotateY`)
- Optimized images
- Clean layout

---

## ⚡ Performance Optimizations

- Efficient frame preloading
- `will-change` usage
- Avoid unnecessary redraws
- Mobile-friendly memory usage
- Scroll listener optimized

---

## 🚀 Deployment (Netlify) (optional at end)

1. Push project to GitHub
2. Open Netlify
3. New Site → Import from Git
4. Select repository
5. Build command: **None**
6. Publish directory: `/`
7. Deploy 🎉

---

## ❗ Rules Followed

- No placeholder / lorem ipsum text
- No libraries
- No overengineering
- Clean, minimal, modern UI
- Production-ready code

---

## 🔧 Configurable Values

You only need to change:
- Total number of frames
- Brand name
- Primary theme color

Everything else works automatically.

---

## ✅ Recommended ezgif Settings

- Frame rate: 24 FPS
- Width: 1600–1920px
- JPG Quality: 80–85
- Remove metadata: ON
- Sequential naming: ON

---

## 📌 Optional Enhancements (Future)

- Frame skipping on low-end devices
- Auto-detect frame count
- Momentum-based scroll smoothing
- WebP frame upgrade

---

## 👨‍💻 Author

Built for high-quality **3D product storytelling on the web** using pure JavaScript.

---
