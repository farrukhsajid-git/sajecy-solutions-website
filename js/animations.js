/**
 * Modern Animation System for Sajecy Solutions
 * Handles scroll animations, parallax effects, and interactive elements
 */

// Intersection Observer for Scroll Animations
class ScrollAnimations {
    constructor() {
        this.observers = new Map();
        this.init();
    }

    init() {
        // Initialize scroll animations
        this.initScrollObserver();
        // Initialize parallax effects
        this.initParallax();
        // Initialize counter animations
        this.initCounters();
        // Initialize image lazy loading
        this.initLazyLoading();
    }

    // Scroll-triggered animations
    initScrollObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');

                    // Add specific animation class based on data attribute
                    const animationType = entry.target.dataset.animation;
                    if (animationType) {
                        entry.target.classList.add(animationType);
                    }
                }
            });
        }, options);

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            observer.observe(element);
        });

        this.observers.set('scroll', observer);
    }

    // Parallax scroll effects
    initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-image');

        const handleScroll = () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };

        // Throttle scroll event for performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Animated counters
    initCounters() {
        const counters = document.querySelectorAll('.counter-animate');

        const animateCounter = (element) => {
            const target = parseInt(element.dataset.target || element.textContent);
            const duration = parseInt(element.dataset.duration) || 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.ceil(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    animateCounter(entry.target);
                    entry.target.dataset.animated = 'true';
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // Lazy loading for images
    initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Cleanup observers
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }
}

// Smooth scroll for anchor links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Mouse parallax effect
class MouseParallax {
    constructor(container) {
        this.container = container;
        this.elements = container.querySelectorAll('.parallax-mouse');
        this.init();
    }

    init() {
        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            this.elements.forEach(element => {
                const speed = element.dataset.speed || 20;
                const xMove = x * speed;
                const yMove = y * speed;
                element.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });

        this.container.addEventListener('mouseleave', () => {
            this.elements.forEach(element => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// Button ripple effect
class RippleEffect {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.ripple').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple-effect');

                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });
    }
}

// Staggered animations for lists and grids
class StaggeredAnimations {
    constructor() {
        this.init();
    }

    init() {
        const staggerContainers = document.querySelectorAll('.stagger-container');

        staggerContainers.forEach(container => {
            const children = container.children;
            const delay = parseInt(container.dataset.staggerDelay) || 100;

            Array.from(children).forEach((child, index) => {
                child.style.animationDelay = `${index * delay}ms`;
                child.classList.add('animate-on-scroll');
            });
        });
    }
}

// Image reveal on scroll
class ImageReveal {
    constructor() {
        this.init();
    }

    init() {
        const images = document.querySelectorAll('.reveal-image');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.2 });

        images.forEach(img => observer.observe(img));
    }
}

// Navbar scroll effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.scrollThreshold = 100;
        this.init();
    }

    init() {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add/remove scrolled class
            if (currentScroll > this.scrollThreshold) {
                this.navbar.classList.add('navbar-scrolled');
            } else {
                this.navbar.classList.remove('navbar-scrolled');
            }

            // Hide/show navbar on scroll
            if (currentScroll > lastScroll && currentScroll > 300) {
                this.navbar.classList.add('navbar-hidden');
            } else {
                this.navbar.classList.remove('navbar-hidden');
            }

            lastScroll = currentScroll;
        });
    }
}

// Progress indicator for page scroll
class ScrollProgress {
    constructor() {
        this.init();
    }

    init() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #FF6B35, #a855f7);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
}

// Text typing effect
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Core animations
    new ScrollAnimations();
    new SmoothScroll();
    new RippleEffect();
    new StaggeredAnimations();
    new ImageReveal();
    new NavbarScroll();
    new ScrollProgress();

    // Initialize mouse parallax for hero sections
    document.querySelectorAll('.hero-section').forEach(hero => {
        new MouseParallax(hero);
    });

    // Initialize typewriter effect if elements exist
    const typeWriterElements = document.querySelectorAll('.typewriter');
    typeWriterElements.forEach(element => {
        const words = JSON.parse(element.dataset.words || '[]');
        if (words.length > 0) {
            new TypeWriter(element, words);
        }
    });

    // Add page loaded class for transitions
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 100);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ScrollAnimations,
        SmoothScroll,
        MouseParallax,
        RippleEffect,
        StaggeredAnimations,
        ImageReveal,
        NavbarScroll,
        ScrollProgress,
        TypeWriter
    };
}
