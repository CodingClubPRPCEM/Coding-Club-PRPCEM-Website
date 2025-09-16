/* Advanced Animations for Coding Club PRPCEM */

// Enhanced Animation Controller
class AnimationController {
    constructor() {
        this.animations = new Map();
        this.observers = new Map();
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.init();
    }

    init() {
        this.setupIntersectionObservers();
        this.initializeScrollAnimations();
        this.initializeHoverEffects();
        this.initializeLoadingAnimations();
        this.initializeParallaxEffects();
        this.initializeGlitchEffects();
        this.initializeMorphingEffects();
    }

    // Advanced Intersection Observer Setup
    setupIntersectionObservers() {
        const configs = {
            default: { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
            hero: { threshold: 0.3, rootMargin: '0px 0px -20% 0px' },
            cards: { threshold: 0.2, rootMargin: '0px 0px -5% 0px' },
            stats: { threshold: 0.5, rootMargin: '0px' }
        };

        Object.entries(configs).forEach(([name, config]) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => this.handleIntersection(entry, name));
            }, config);
            
            this.observers.set(name, observer);
        });

        this.observeElements();
    }

    observeElements() {
        // Hero elements
        const heroElements = document.querySelectorAll('.hero-logo, .hero-text, .hero-actions');
        heroElements.forEach(el => this.observers.get('hero').observe(el));

        // Card elements
        const cardElements = document.querySelectorAll('.about-card, .event-card, .project-card, .team-card');
        cardElements.forEach(el => this.observers.get('cards').observe(el));

        // Stats elements
        const statsElements = document.querySelectorAll('.hero-stats');
        statsElements.forEach(el => this.observers.get('stats').observe(el));

        // Default elements
        const defaultElements = document.querySelectorAll('.section-header, .contact-card');
        defaultElements.forEach(el => this.observers.get('default').observe(el));
    }

    handleIntersection(entry, observerType) {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const animationClass = this.getAnimationClass(element, observerType);
        
        if (animationClass && !this.isReducedMotion) {
            this.triggerAnimation(element, animationClass);
        }
    }

    getAnimationClass(element, observerType) {
        const classMap = {
            hero: 'animate-scale-in',
            cards: 'animate-slide-up',
            stats: 'animate-counter',
            default: 'animate-fade-in'
        };

        // Special cases
        if (element.classList.contains('hero-logo')) return 'animate-bounce-in';
        if (element.classList.contains('event-card')) return 'animate-slide-up-stagger';
        if (element.classList.contains('team-card')) return 'animate-flip-in';
        
        return classMap[observerType] || 'animate-fade-in';
    }

    triggerAnimation(element, animationClass) {
        element.classList.add(animationClass);
        
        // Add stagger delay for multiple elements
        if (animationClass.includes('stagger')) {
            const siblings = Array.from(element.parentElement.children);
            const index = siblings.indexOf(element);
            element.style.animationDelay = `${index * 0.1}s`;
        }
    }

    // Scroll-based Animations
    initializeScrollAnimations() {
        if (this.isReducedMotion) return;

        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateScrollAnimations();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        this.updateScrollAnimations(); // Initial call
    }

    updateScrollAnimations() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Parallax backgrounds
        this.updateParallaxElements(scrollTop);
        
        // Progress indicators
        this.updateProgressIndicators(scrollTop);
        
        // Floating elements
        this.updateFloatingElements(scrollTop);
        
        // Header transformation
        this.updateHeaderTransform(scrollTop);
    }

    updateParallaxElements(scrollTop) {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallax) || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    updateProgressIndicators(scrollTop) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / totalHeight) * 100;
        
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }

    updateFloatingElements(scrollTop) {
        const floatingElements = document.querySelectorAll('.floating-element');
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = Math.sin(scrollTop * 0.01 + index) * 10;
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    updateHeaderTransform(scrollTop) {
        const header = document.querySelector('.mobile-nav');
        if (!header) return;

        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Advanced Hover Effects
    initializeHoverEffects() {
        if (this.isReducedMotion) return;

        this.initializeMagneticButtons();
        this.initializeGlowEffects();
        this.initializeTiltEffects();
        this.initializeRippleEffects();
    }

    initializeMagneticButtons() {
        const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-link');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const strength = 0.3;
                element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    }

    initializeGlowEffects() {
        const glowElements = document.querySelectorAll('.event-card, .project-card, .team-card');
        
        glowElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.boxShadow = '';
            });
        });
    }

    initializeTiltEffects() {
        const tiltElements = document.querySelectorAll('.about-card');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                const tiltX = (y - 0.5) * 20;
                const tiltY = (x - 0.5) * -20;
                
                element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }

    initializeRippleEffects() {
        const rippleElements = document.querySelectorAll('button, .nav-link');
        
        rippleElements.forEach(element => {
            element.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = element.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease;
                    pointer-events: none;
                `;
                
                element.style.position = 'relative';
                element.style.overflow = 'hidden';
                element.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Loading Animations
    initializeLoadingAnimations() {
        if (this.isReducedMotion) return;

        this.createLoadingSequence();
        this.animateElementsOnLoad();
    }

    createLoadingSequence() {
        const elements = document.querySelectorAll('.hero-content > *');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 + (index * 150));
        });
    }

    animateElementsOnLoad() {
        const animatedElements = document.querySelectorAll('[data-animate-on-load]');
        
        animatedElements.forEach((element, index) => {
            const animationType = element.dataset.animateOnLoad || 'fadeIn';
            const delay = parseInt(element.dataset.delay) || (index * 100);
            
            setTimeout(() => {
                element.classList.add(`animate-${animationType}`);
            }, delay);
        });
    }

    // Parallax Effects
    initializeParallaxEffects() {
        if (this.isReducedMotion) return;

        this.createParallaxLayers();
        this.initializeScrollParallax();
    }

    createParallaxLayers() {
        const parallaxContainers = document.querySelectorAll('.parallax-container');
        
        parallaxContainers.forEach(container => {
            const layers = container.querySelectorAll('.parallax-layer');
            
            layers.forEach((layer, index) => {
                layer.dataset.parallax = (index + 1) * 0.1;
            });
        });
    }

    initializeScrollParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax-bg]');
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallaxBg) || 0.5;
            
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const yPos = -(scrolled * speed);
                element.style.backgroundPosition = `center ${yPos}px`;
            }, { passive: true });
        });
    }

    // Glitch Effects
    initializeGlitchEffects() {
        if (this.isReducedMotion) return;

        const glitchElements = document.querySelectorAll('.glitch-text');
        
        glitchElements.forEach(element => {
            this.createGlitchEffect(element);
        });
    }

    createGlitchEffect(element) {
        const originalText = element.textContent;
        const glitchChars = '!@#$%^&*(){}[]|;:,.<>?';
        
        element.addEventListener('mouseenter', () => {
            let iterations = 0;
            const maxIterations = 10;
            
            const interval = setInterval(() => {
                element.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) return originalText[index];
                        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    })
                    .join('');
                
                iterations += 1/3;
                
                if (iterations >= maxIterations) {
                    clearInterval(interval);
                    element.textContent = originalText;
                }
            }, 30);
        });
    }

    // Morphing Effects
    initializeMorphingEffects() {
        if (this.isReducedMotion) return;

        this.createMorphingShapes();
        this.initializeShapeAnimations();
    }

    createMorphingShapes() {
        const morphContainers = document.querySelectorAll('.morph-container');
        
        morphContainers.forEach(container => {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 200 200');
            svg.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
            `;
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('fill', 'rgba(0, 212, 255, 0.1)');
            path.setAttribute('d', 'M20,20 Q50,10 80,20 T140,20 Q170,30 180,60 T170,140 Q160,170 140,180 T80,180 Q50,170 20,140 T20,80 Q10,50 20,20');
            
            svg.appendChild(path);
            container.appendChild(svg);
            
            this.animateMorphingShape(path);
        });
    }

    animateMorphingShape(path) {
        const morphPaths = [
            'M20,20 Q50,10 80,20 T140,20 Q170,30 180,60 T170,140 Q160,170 140,180 T80,180 Q50,170 20,140 T20,80 Q10,50 20,20',
            'M40,40 Q80,20 120,40 T160,40 Q180,80 160,120 T160,160 Q120,180 80,160 T40,160 Q20,120 40,80 T40,40',
            'M60,60 Q100,40 140,60 T180,60 Q200,100 180,140 T180,180 Q140,200 100,180 T60,180 Q40,140 60,100 T60,60'
        ];
        
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % morphPaths.length;
            path.style.transition = 'd 2s ease-in-out';
            path.setAttribute('d', morphPaths[currentIndex]);
        }, 3000);
    }

    initializeShapeAnimations() {
        const animatedShapes = document.querySelectorAll('.animated-shape');
        
        animatedShapes.forEach((shape, index) => {
            const duration = 3 + (index % 3);
            const delay = index * 0.5;
            
            shape.style.cssText += `
                animation: float ${duration}s ease-in-out infinite;
                animation-delay: ${delay}s;
            `;
        });
    }

    // Text Animations
    initializeTextAnimations() {
        if (this.isReducedMotion) return;

        this.createTypingEffect();
        this.createWordReveal();
        this.createLetterAnimations();
    }

    createTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');
        
        typingElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                element.textContent += text.charAt(i);
                i++;
                
                if (i >= text.length) {
                    clearInterval(typeInterval);
                }
            }, 50);
        });
    }

    createWordReveal() {
        const revealElements = document.querySelectorAll('.word-reveal');
        
        revealElements.forEach(element => {
            const words = element.textContent.split(' ');
            element.innerHTML = words
                .map(word => `<span class="word-reveal-item">${word}</span>`)
                .join(' ');
            
            const wordSpans = element.querySelectorAll('.word-reveal-item');
            
            wordSpans.forEach((span, index) => {
                span.style.cssText = `
                    display: inline-block;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: wordReveal 0.6s ease forwards;
                    animation-delay: ${index * 0.1}s;
                `;
            });
        });
    }

    createLetterAnimations() {
        const letterElements = document.querySelectorAll('.letter-animation');
        
        letterElements.forEach(element => {
            const letters = element.textContent.split('');
            element.innerHTML = letters
                .map((letter, index) => 
                    `<span class="letter" style="animation-delay: ${index * 0.05}s">${letter === ' ' ? '&nbsp;' : letter}</span>`
                )
                .join('');
        });
    }

    // Cleanup method
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.animations.clear();
        this.observers.clear();
    }
}

// Initialize Animation Controller
const animationController = new AnimationController();

// Export for global access
window.AnimationController = AnimationController;
window.animationController = animationController;

// CSS Animations (inject into document)
const animationCSS = `
/* Core Animations */
@keyframes animate-fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes animate-slide-up {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes animate-slide-up-stagger {
    from { opacity: 0; transform: translateY(30px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes animate-scale-in {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes animate-bounce-in {
    0% { opacity: 0; transform: scale(0.3); }
    50% { opacity: 1; transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
}

@keyframes animate-flip-in {
    from { opacity: 0; transform: perspective(400px) rotateY(90deg); }
    to { opacity: 1; transform: perspective(400px) rotateY(0deg); }
}

@keyframes animate-counter {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Ripple Effect */
@keyframes ripple {
    to { transform: scale(4); opacity: 0; }
}

/* Float Animation */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

/* Word Reveal */
@keyframes wordReveal {
    to { opacity: 1; transform: translateY(0); }
}

/* Letter Animation */
.letter-animation .letter {
    display: inline-block;
    opacity: 0;
    animation: letterDrop 0.6s ease forwards;
}

@keyframes letterDrop {
    0% { opacity: 0; transform: translateY(-20px) rotateZ(10deg); }
    100% { opacity: 1; transform: translateY(0) rotateZ(0deg); }
}

/* Glitch Effect */
.glitch-text {
    position: relative;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.glitch-text:hover::before {
    animation: glitch-1 0.3s ease-in-out infinite;
    color: #ff0000;
    z-index: -1;
}

.glitch-text:hover::after {
    animation: glitch-2 0.3s ease-in-out infinite;
    color: #00ffff;
    z-index: -2;
}

@keyframes glitch-1 {
    0%, 14%, 15%, 49%, 50%, 99%, 100% { transform: translate(0); }
    15%, 49% { transform: translate(-2px, 2px); }
}

@keyframes glitch-2 {
    0%, 20%, 21%, 62%, 63%, 99%, 100% { transform: translate(0); }
    21%, 62% { transform: translate(2px, -2px); }
}

/* Scroll Progress */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #6c5ce7);
    z-index: 10000;
    transition: width 0.3s ease;
}

/* Animation Classes */
.animate-fade-in { animation: animate-fade-in 0.8s ease forwards; }
.animate-slide-up { animation: animate-slide-up 0.8s ease forwards; }
.animate-slide-up-stagger { animation: animate-slide-up-stagger 0.8s ease forwards; }
.animate-scale-in { animation: animate-scale-in 0.8s ease forwards; }
.animate-bounce-in { animation: animate-bounce-in 1s ease forwards; }
.animate-flip-in { animation: animate-flip-in 0.8s ease forwards; }
.animate-counter { animation: animate-counter 0.6s ease forwards; }

/* Header Scroll State */
.mobile-nav.scrolled {
    background: rgba(10, 14, 26, 0.98);
    backdrop-filter: blur(30px);
    border-bottom: 1px solid rgba(0, 212, 255, 0.3);
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
`;

// Inject animation CSS
const animationStyle = document.createElement('style');
animationStyle.textContent = animationCSS;
document.head.appendChild(animationStyle);

// Add scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

console.log('🎨 Advanced Animations Loaded Successfully!');


 document.addEventListener('DOMContentLoaded', function() {
      // Mobile menu functionality
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      
      if (mobileMenuBtn && mobileMenu) {
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function(e) {
          e.preventDefault();
          mobileMenuBtn.classList.toggle('active');
          mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        mobileNavItems.forEach(item => {
          item.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
          });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
          if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
          }
        });
        
        // Close menu on window resize
        window.addEventListener('resize', function() {
          if (window.innerWidth >= 1024) {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
          }
        });
      }
      
      // Smooth scrolling for anchor links
      const navLinks = document.querySelectorAll('.nav-item, .mobile-nav-item');
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              const offsetTop = target.offsetTop - 80; // Account for navbar height
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              });
            }
          }
        });
      });
      
      // Add scroll effect to navbar
      let lastScrollTop = 0;
      window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove shadow based on scroll position
        if (scrollTop > 10) {
          navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
          navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
      });
    });