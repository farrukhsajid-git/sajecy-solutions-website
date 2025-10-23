/**
 * SAJECY SOLUTIONS - HERO SLIDER
 * Auto-rotating hero carousel with 3 slides
 * Features: Auto-rotation, navigation dots, pause on hover, keyboard navigation
 */

class HeroSlider {
  constructor(sliderElement, options = {}) {
    this.slider = sliderElement;
    this.slides = this.slider.querySelectorAll('.hero-slide');
    this.currentSlide = 0;
    this.isPlaying = true;
    this.interval = null;

    // Configuration
    this.config = {
      autoplayDelay: options.autoplayDelay || 4000, // 4 seconds
      transitionDuration: options.transitionDuration || 800, // 800ms
      pauseOnHover: options.pauseOnHover !== false, // Default true
      ...options
    };

    this.init();
  }

  init() {
    if (this.slides.length <= 1) {
      console.warn('Hero slider requires at least 2 slides');
      return;
    }

    this.createNavigation();
    this.setupEventListeners();
    this.showSlide(0);
    this.startAutoplay();
  }

  createNavigation() {
    // Create dots navigation
    const nav = document.createElement('div');
    nav.className = 'hero-nav';
    nav.setAttribute('aria-label', 'Slide navigation');

    this.slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'hero-nav-dot';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.setAttribute('data-slide', index);

      if (index === 0) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'true');
      }

      dot.addEventListener('click', () => {
        this.goToSlide(index);
        // Reset autoplay after manual click
        this.startAutoplay();
      });

      nav.appendChild(dot);
    });

    this.slider.appendChild(nav);
    this.dots = nav.querySelectorAll('.hero-nav-dot');
  }

  setupEventListeners() {
    // Pause on hover
    if (this.config.pauseOnHover) {
      this.slider.addEventListener('mouseenter', () => {
        this.isPlaying = false;
      });
      this.slider.addEventListener('mouseleave', () => {
        this.isPlaying = true;
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.slider.matches(':hover')) return;

      if (e.key === 'ArrowLeft') {
        this.previousSlide();
        this.startAutoplay();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
        this.startAutoplay();
      }
    });

    // Pause when tab is not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.isPlaying = false;
      } else {
        this.isPlaying = true;
      }
    });

    // Pause when window loses focus
    window.addEventListener('blur', () => {
      this.isPlaying = false;
    });
    window.addEventListener('focus', () => {
      if (!document.hidden) {
        this.isPlaying = true;
      }
    });
  }

  showSlide(index) {
    // Remove active class from all slides
    this.slides.forEach((slide, i) => {
      slide.classList.remove('active', 'fade-out');
      slide.setAttribute('aria-hidden', 'true');

      // Ensure slide is hidden
      if (i !== index) {
        slide.style.opacity = '0';
        slide.style.visibility = 'hidden';
        slide.style.zIndex = '1';
      }
    });

    // Update dots
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });

    // Show new slide
    const targetSlide = this.slides[index];
    targetSlide.classList.add('active');
    targetSlide.setAttribute('aria-hidden', 'false');
    targetSlide.style.visibility = 'visible';
    targetSlide.style.zIndex = '2';

    // Trigger reflow for animation
    void targetSlide.offsetWidth;

    targetSlide.style.opacity = '1';

    this.currentSlide = index;
  }

  goToSlide(index) {
    if (index === this.currentSlide) return;

    const previousSlide = this.slides[this.currentSlide];
    previousSlide.classList.add('fade-out');

    setTimeout(() => {
      this.showSlide(index);
    }, this.config.transitionDuration / 2);
  }

  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  previousSlide() {
    const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }

  startAutoplay() {
    this.isPlaying = true;

    // Clear any existing interval first
    if (this.interval) {
      clearInterval(this.interval);
    }

    // Start the interval
    this.interval = setInterval(() => {
      if (this.isPlaying) {
        this.nextSlide();
      }
    }, this.config.autoplayDelay);
  }

  stopAutoplay() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.isPlaying = false;
  }

  destroy() {
    this.stopAutoplay();

    // Remove navigation
    const nav = this.slider.querySelector('.hero-nav');
    if (nav) nav.remove();

    // Reset slides
    this.slides.forEach(slide => {
      slide.classList.remove('active', 'fade-out');
      slide.removeAttribute('aria-hidden');
      slide.style.opacity = '';
      slide.style.visibility = '';
      slide.style.zIndex = '';
    });
  }
}

// Initialize slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const heroSliderElement = document.querySelector('.hero-slider');

  if (heroSliderElement) {
    // Create slider instance
    window.heroSlider = new HeroSlider(heroSliderElement, {
      autoplayDelay: 4000,        // 4 seconds per slide
      transitionDuration: 800,     // 800ms transition
      pauseOnHover: true           // Pause when user hovers
    });

    // Expose controls for debugging (remove in production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Hero Slider initialized. Controls available:');
      console.log('- heroSlider.nextSlide()');
      console.log('- heroSlider.previousSlide()');
      console.log('- heroSlider.goToSlide(index)');
      console.log('- heroSlider.stopAutoplay()');
      console.log('- heroSlider.startAutoplay()');
    }
  }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HeroSlider;
}
