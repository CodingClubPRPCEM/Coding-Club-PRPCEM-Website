/* ==========================================================================
   PRPCEM Coding Club - Advanced Interactions & Scrollytelling Engine
   Purpose-Driven JavaScript for Enhanced User Experience
   ========================================================================== */

class PRPCEMWebsite {
  constructor() {
    this.init();
    this.setupScrollAnimations();
    this.setupCounters();
    this.setupTypingAnimation();
    this.setupParticles();
    this.setupScrollProgress();
    this.setupNavigation();
    this.setupProjectFilters();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.onReady());
    } else {
      this.onReady();
    }
  }

  onReady() {
    console.log('PRPCEM Website initialized successfully!');
    this.createParticleSystem();
    this.initializeScrollObserver();
  }

  // Scroll-triggered animations using Intersection Observer
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          
          // Trigger specific animations based on element type
          if (entry.target.classList.contains('counter')) {
            this.animateCounter(entry.target);
          }
          
          if (entry.target.classList.contains('typing-text')) {
            this.startTypingAnimation(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll, .stagger-animation, .counter, .typing-text').forEach(el => {
      observer.observe(el);
    });
  }

  // Advanced counter animation
  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    // Add visual emphasis
    element.style.transform = 'scale(1.1)';
    element.style.color = 'var(--accent-primary)';
    
    setTimeout(() => {
      element.style.transform = 'scale(1)';
    }, 300);

    updateCounter();
  }

  // Typing animation for code/terminal effects
  setupTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-animation');
    
    typingElements.forEach(element => {
      const text = element.getAttribute('data-text') || element.textContent;
      element.textContent = '';
      element.setAttribute('data-original-text', text);
    });
  }

  startTypingAnimation(element) {
    const text = element.getAttribute('data-original-text');
    const speed = parseInt(element.getAttribute('data-speed')) || 100;
    let index = 0;

    const typeChar = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeChar, speed);
      }
    };

    typeChar();
  }

  // Particle system for background animation
  createParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    `;
    document.body.appendChild(particleContainer);

    // Create particles
    for (let i = 0; i < 50; i++) {
      this.createParticle(particleContainer);
    }
  }

  createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random positioning and animation delay
    const left = Math.random() * 100;
    const animationDelay = Math.random() * 10;
    const animationDuration = 10 + Math.random() * 10;
    
    particle.style.cssText = `
      left: ${left}%;
      animation-delay: ${animationDelay}s;
      animation-duration: ${animationDuration}s;
    `;
    
    container.appendChild(particle);
  }

  setupParticles() {
    // This method will be enhanced with more sophisticated particle effects
    console.log('Particle system ready');
  }

  // Scroll progress indicator
  setupScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.width = `${scrolled}%`;
    });
  }

  // Enhanced navigation with smooth scrolling
  setupNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Active section highlighting
    this.highlightActiveSection();
  }

  highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link-neumorphic');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          // Remove active class from all nav links
          navLinks.forEach(link => link.classList.remove('active'));
          
          // Add active class to current section's nav link
          const activeLink = document.querySelector(`a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, {
      threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));
  }

  // Project filtering system
  setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
          const categories = card.getAttribute('data-categories').split(' ');
          
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
            card.classList.add('animate-on-scroll');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Gamification system methods
  updateMemberStats(memberId, points, badges) {
    // This will be expanded with backend integration
    console.log(`Member ${memberId} earned ${points} points and ${badges.length} badges`);
  }

  // Advanced scrollytelling for homepage
  initializeScrollytelling() {
    const heroSection = document.querySelector('.hero-section');
    const statsSection = document.querySelector('.stats-section');
    const projectsSection = document.querySelector('.projects-preview');

    if (!heroSection || !statsSection || !projectsSection) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.5;

      // Parallax effect for hero
      heroSection.style.transform = `translateY(${rate}px)`;
      
      // Fade in/out effects
      const heroOpacity = Math.max(0, 1 - scrolled / window.innerHeight);
      heroSection.style.opacity = heroOpacity;
    });
  }

  // Dynamic theme switching (future enhancement)
  toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  }

  // Performance monitoring
  initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    });
  }

  // Error handling and fallbacks
  handleError(error, context) {
    console.error(`Error in ${context}:`, error);
    // Implement fallback behavior or user notification
  }

  // Mobile-specific optimizations
  setupMobileOptimizations() {
    if (window.innerWidth <= 768) {
      // Reduce animations for better performance
      document.documentElement.style.setProperty('--transition-normal', '0.2s');
      document.documentElement.style.setProperty('--transition-slow', '0.3s');
      
      // Simplify particle system
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        if (index > 10) particle.remove(); // Keep only 10 particles on mobile
      });
    }
  }

  // Initialize scroll observer for performance
  initializeScrollObserver() {
    let ticking = false;

    const updateScrollPosition = () => {
      this.initializeScrollytelling();
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    });
  }
}

// Utility functions
const utils = {
  // Debounce function for performance optimization
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Generate random ID for dynamic elements
  generateId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
  }
};

// Initialize the website when script loads
const prpcemWebsite = new PRPCEMWebsite();

// Make website instance globally available for debugging
window.prpcemWebsite = prpcemWebsite;
window.utils = utils;

// Service Worker registration for PWA capabilities (future enhancement)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => console.log('SW registered'))
      .catch(error => console.log('SW registration failed'));
  });
}