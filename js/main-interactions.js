/**
 * SAJECY SOLUTIONS - MAIN INTERACTIONS
 * Mobile menu, smooth scrolling, form validation, and other interactions
 */

(function() {
  'use strict';

  // ============================================
  // MOBILE MENU FUNCTIONALITY
  // ============================================

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const body = document.body;

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';

      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      body.classList.toggle('menu-open');

      // Animate hamburger icon
      const spans = mobileMenuToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');

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
        body.classList.remove('menu-open');

        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // ============================================
  // DROPDOWN MENU FUNCTIONALITY
  // ============================================

  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Close other dropdowns
      dropdownToggles.forEach(otherToggle => {
        if (otherToggle !== this) {
          otherToggle.setAttribute('aria-expanded', 'false');
          const otherDropdown = otherToggle.nextElementSibling;
          if (otherDropdown) {
            otherDropdown.classList.remove('active');
          }
        }
      });

      // Toggle current dropdown
      this.setAttribute('aria-expanded', !isExpanded);
      if (dropdown) {
        dropdown.classList.toggle('active');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
      dropdownToggles.forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
        const dropdown = toggle.nextElementSibling;
        if (dropdown) {
          dropdown.classList.remove('active');
        }
      });
    }
  });

  // ============================================
  // SMOOTH SCROLLING FOR ANCHOR LINKS
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const offsetTop = target.offsetTop - 80; // Account for fixed header

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, href);

        // Focus the target for accessibility
        target.focus({ preventScroll: true });
      }
    });
  });

  // ============================================
  // NAVBAR SCROLL EFFECTS
  // ============================================

  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for styling
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Hide navbar on scroll down, show on scroll up (optional)
    // Uncomment if you want this behavior:
    /*
    if (currentScroll > lastScroll && currentScroll > 500) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    */

    lastScroll = currentScroll;
  });

  // ============================================
  // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
  // ============================================

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Optional: Unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-right');
  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

  // ============================================
  // FORM VALIDATION
  // ============================================

  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let isValid = true;
      const formData = new FormData(form);

      // Clear previous errors
      form.querySelectorAll('.error-message').forEach(error => error.remove());
      form.querySelectorAll('.error').forEach(input => input.classList.remove('error'));

      // Validate required fields
      form.querySelectorAll('[required]').forEach(field => {
        const value = field.value.trim();

        if (!value) {
          showError(field, 'This field is required');
          isValid = false;
        } else if (field.type === 'email' && !isValidEmail(value)) {
          showError(field, 'Please enter a valid email address');
          isValid = false;
        }
      });

      if (isValid) {
        // Form is valid, submit it
        console.log('Form submitted:', Object.fromEntries(formData));

        // Show success message
        showSuccessMessage(form);

        // Reset form
        form.reset();
      }
    });
  });

  function showError(field, message) {
    field.classList.add('error');

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#EF4444';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;

    field.parentNode.appendChild(errorDiv);
  }

  function showSuccessMessage(form) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.background = 'rgba(16, 185, 129, 0.1)';
    successDiv.style.border = '1px solid rgba(16, 185, 129, 0.3)';
    successDiv.style.color = '#10B981';
    successDiv.style.padding = '1rem';
    successDiv.style.borderRadius = '8px';
    successDiv.style.marginBottom = '1rem';
    successDiv.textContent = 'Thank you! Your message has been sent successfully.';

    form.insertBefore(successDiv, form.firstChild);

    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // ============================================
  // LAZY LOADING IMAGES
  // ============================================

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');

          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }

          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // BACK TO TOP BUTTON
  // ============================================

  const backToTopButton = document.querySelector('.back-to-top');

  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 500) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });

    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================
  // PERFORMANCE MONITORING (DEV ONLY)
  // ============================================

  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.addEventListener('load', function() {
      if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        console.log('Performance Metrics:');
        console.log('- Page Load Time:', pageLoadTime, 'ms');
        console.log('- Connection Time:', connectTime, 'ms');
        console.log('- Render Time:', renderTime, 'ms');
      }
    });
  }

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================

  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Throttle function for scroll events
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Export utilities for global use
  window.SajecyUtils = {
    debounce,
    throttle
  };

})();
