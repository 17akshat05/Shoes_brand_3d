
class ScrollAnimator {
    constructor({ containerSelector, stickySelector, canvasSelector, folderPath, frameCount, frameNamePattern }) {
        this.container = document.querySelector(containerSelector);
        this.stickyWrapper = document.querySelector(stickySelector);
        this.canvas = document.querySelector(canvasSelector);

        if (!this.container || !this.canvas) {
            console.warn('ScrollAnimator: Container or Canvas not found.');
            return;
        }

        this.context = this.canvas.getContext('2d', { alpha: true }); // Alpha true for potential transparency

        // Settings to improve crispness
        this.context.imageSmoothingEnabled = false; // As requested: Disable smoothing for sharpness (pixel perfect)

        this.folderPath = folderPath;
        this.frameCount = frameCount;
        this.frameNamePattern = frameNamePattern || ((i) => `ezgif-frame-${i.toString().padStart(3, '0')}.jpg`);

        this.images = [];
        this.imagesLoaded = 0;
        this.currentFrame = 0;

        // Check for reduced motion preference
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        this.init();
    }

    init() {
        this.preloadImages();

        // Defer sizing until at least one image is loaded to know aspect ratio
        // But we can set initial listeners

        // Optimize: Debounce resize to prevent thrashing
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this.updateCanvasSize(), 150);
        });

        // Optimize: Scroll is already raf-throttled via logic below, 
        // but we ensure lightweight calculations.
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    }

    generatePath(index) {
        return `${this.folderPath}${this.frameNamePattern(index)}`;
    }

    preloadImages() {
        for (let i = 1; i <= this.frameCount; i++) {
            const img = new Image();
            img.src = this.generatePath(i);
            img.onload = () => {
                this.imagesLoaded++;
                if (this.imagesLoaded === 1) {
                    // First image loaded, setting up sizing based on its natural dimensions
                    this.setupMetrics(img);
                    this.renderFrame(0);
                }
            };
            this.images.push(img);
        }
    }

    setupMetrics(img) {
        // Store natural dimensions
        this.imgWidth = img.naturalWidth;
        this.imgHeight = img.naturalHeight;
        this.updateCanvasSize();
    }

    updateCanvasSize() {
        if (!this.imgWidth) return;

        // Container dimensions (the visual box we want to fit in)
        // We look at the parent element's size, not the window
        const parent = this.canvas.parentElement;
        const parentWidth = parent.clientWidth;
        const parentHeight = parent.clientHeight;

        // Calculate the scale to fit 'contain' style
        const scale = Math.min(parentWidth / this.imgWidth, parentHeight / this.imgHeight, 1); // 1 = max scale (never upscale)

        // Set display size (CSS)
        this.canvas.style.width = `${this.imgWidth * scale}px`;
        this.canvas.style.height = `${this.imgHeight * scale}px`;

        // Set buffer size (Actual pixels) - use Device Pixel Ratio for High DPI
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = this.imgWidth; // Render at native image resolution? 
        // User said: "Match canvas size to image size (no stretching)"
        // If we want it SHARP, we should usually match the CSS pixels * DPR. 
        // BUT user specifically said "Do NOT upscale images beyond native resolution".
        // If the image is 500px, and we display it at 500px CSS on a 2x screen, we physically have 1000px.
        // If we make canvas.width 1000, we are upscaling the 500px image data -> blurry.
        // So we should keep canvas.width = naturalWidth. 
        // And let the browser handle the display scaling.

        this.canvas.width = this.imgWidth;
        this.canvas.height = this.imgHeight;

        // Re-render
        this.renderFrame(this.currentFrame);
    }

    renderFrame(index) {
        const img = this.images[index];
        if (!img || !img.complete) return;

        // Clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw exact 1:1 using natural dimensions
        // canvas.width is already set to naturalWidth
        this.context.drawImage(img, 0, 0, this.imgWidth, this.imgHeight);
    }

    handleScroll() {
        if (this.imagesLoaded < this.frameCount) return; // Wait for loading
        if (this.prefersReducedMotion) return;

        const rect = this.container.getBoundingClientRect();
        // Calculate scroll progress
        // When container top reaches 0, we start. 
        // Length of animation is container height - viewport height.
        const scrollTop = -rect.top;
        const maxScroll = this.container.offsetHeight - window.innerHeight;

        let scrollFraction = scrollTop / maxScroll;

        // Clamp
        if (scrollFraction < 0) scrollFraction = 0;
        if (scrollFraction > 1) scrollFraction = 1;

        const frameIndex = Math.min(
            this.frameCount - 1,
            Math.ceil(scrollFraction * (this.frameCount - 1))
        );

        if (frameIndex !== this.currentFrame) {
            this.currentFrame = frameIndex;
            requestAnimationFrame(() => this.renderFrame(this.currentFrame));
        }
    }
}
