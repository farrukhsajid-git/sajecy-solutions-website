/**
 * SAJECY SOLUTIONS - MAIN JAVASCRIPT
 * Modern Professional IT Services Website
 * Handles navigation, animations, and interactions
 */

(function() {
  'use strict';

  // ============================================
  // MOBILE NAVIGATION
  // ============================================

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      mobileMenuToggle.setAttribute('aria-expanded', isExpanded);

      // Animate hamburger icon
      const spans = mobileMenuToggle.querySelectorAll('span');
      if (isExpanded) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.focus();
      }
    });
  }

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in, .scale-in, .slide-in-left, .slide-in-right');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // ============================================
  // SMOOTH SCROLLING
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Close mobile menu if open
          if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
          }
        }
      }
    });
  });

  // ============================================
  // NAVBAR SCROLL EFFECT
  // ============================================

  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
  });

  // ============================================
  // DROPDOWN KEYBOARD NAVIGATION
  // ============================================

  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (toggle && menu) {
      toggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', !isExpanded);

          if (!isExpanded) {
            const firstLink = menu.querySelector('a');
            if (firstLink) {
              setTimeout(() => firstLink.focus(), 100);
            }
          }
        }
      });
    }
  });

  // ============================================
  // PERFORMANCE MONITORING
  // ============================================

  // Log Core Web Vitals if available
  if ('PerformanceObserver' in window) {
    try {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsScore = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsScore += entry.value;
          }
        }
        console.log('CLS:', clsScore);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Performance monitoring not critical
      console.log('Performance monitoring not available');
    }
  }

  // ============================================
  // FORM HANDLING (IF FORMS EXIST)
  // ============================================

  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      // Basic validation
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  });

  // ============================================
  // ACCESSIBILITY: FOCUS VISIBLE
  // ============================================

  // Add focus-visible polyfill behavior for older browsers
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });

  // ============================================
  // LAZY LOADING IMAGES
  // ============================================

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // ============================================
  // REDUCED MOTION PREFERENCE
  // ============================================

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
  }

  // ============================================
  // CONSOLE MESSAGE
  // ============================================

  console.log('%cSajecy Solutions', 'font-size: 24px; font-weight: bold; color: #0A2463;');
  console.log('%cWebsite by Modern Design System', 'font-size: 12px; color: #3E92CC;');
  console.log('%cInterested in joining our team? Visit /careers', 'font-size: 12px; color: #52B2CF;');

})();
