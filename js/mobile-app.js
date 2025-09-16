/* Mobile-First JavaScript for Coding Club PRPCEM */

// Utility Functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHeroAnimations();
    initializeParticleBackground();
    initializeScrollAnimations();
    initializeFormHandlers();
    initializeStatsCounter();
    initializeCodeRain();
    initializeTypingAnimation();
});

// Mobile Navigation - Updated for Neural Network Navigation
function initializeNavigation() {
    const cyberToggle = $('#cyberToggle');
    const mobileNeuralMenu = $('#mobileNeuralMenu');
    const navNodes = $$('.nav-node, .mobile-node');
    const body = document.body;

    // Handle cyber toggle
    if (cyberToggle) {
        cyberToggle.addEventListener('click', function() {
            const isActive = cyberToggle.classList.contains('active');
            
            if (isActive) {
                closeNeuralMenu();
            } else {
                openNeuralMenu();
            }
        });
    }

    function openNeuralMenu() {
        cyberToggle.classList.add('active');
        mobileNeuralMenu.classList.add('active');
        body.style.overflow = 'hidden';
        
        // Add staggered animation to menu items
        const mobileNodes = $$('.mobile-node');
        mobileNodes.forEach((node, index) => {
            setTimeout(() => {
                node.style.animation = `slideInFromLeft 0.3s ease-out forwards`;
            }, index * 100);
        });
    }

    function closeNeuralMenu() {
        cyberToggle.classList.remove('active');
        mobileNeuralMenu.classList.remove('active');
        body.style.overflow = 'auto';
    }

    // Close menu when clicking mobile nav links
    navNodes.forEach(node => {
        node.addEventListener('click', function(e) {
            if (node.classList.contains('mobile-node')) {
                setTimeout(closeNeuralMenu, 150);
            }
        });
    });

    // Close menu when clicking outside
    mobileNeuralMenu?.addEventListener('click', function(e) {
        if (e.target === mobileNeuralMenu) {
            closeNeuralMenu();
        }
    });

    // Handle neural node hover effects
    const desktopNodes = $$('.nav-node');
    desktopNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            // Add ripple effect
            createRippleEffect(node);
        });
    });

    // Update active navigation state based on current page
    updateActiveNavigation();
}

// Create ripple effect for neural nodes
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.className = 'neural-ripple';
    ripple.style.cssText = `
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
        z-index: -1;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Update active navigation state
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Support nav-node, mobile-node, nav-item, mobile-nav-item
    const navNodes = $$('.nav-node, .mobile-node, .nav-item, .mobile-nav-item');
    navNodes.forEach(node => {
        const href = node.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes rippleEffect {
        to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    
    .neural-ripple {
        position: absolute !important;
    }
`;
document.head.appendChild(style);

// Particle Background Animation
function initializeParticleBackground() {
    const particleBg = $('#particle-bg');
    const particleCount = window.innerWidth < 768 ? 30 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleMove ${Math.random() * 20 + 10}s linear infinite;
        `;
        particleBg.appendChild(particle);
    }

    // Add particle movement animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleMove {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Code Rain Animation
function initializeCodeRain() {
    const codeRain = $('#codeRain');
    if (!codeRain) return;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function drawRain() {
        codeRain.innerHTML = '';
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            const drop = document.createElement('span');
            drop.textContent = text;
            drop.style.cssText = `
                position: absolute;
                left: ${i * 20}px;
                top: ${drops[i] * 20}px;
                color: rgba(0, 212, 255, ${Math.random() * 0.8 + 0.2});
                font-family: 'Courier New', monospace;
                font-size: 14px;
                pointer-events: none;
            `;
            codeRain.appendChild(drop);

            if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawRain, 100);
}

// Typing Animation
function initializeTypingAnimation() {
    const typingText = $('#typingText');
    if (!typingText) return;

    const phrases = [
        'Welcome to Coding Club PRPCEM',
        'Innovation meets Technology',
        'Building the Future Together',
        'Code. Create. Collaborate.',
        'Join our Tech Community'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeAnimation() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before new phrase
        }

        setTimeout(typeAnimation, typeSpeed);
    }

    typeAnimation();
}

// Stats Counter Animation
function initializeStatsCounter() {
    const statNumbers = $$('.stat-number');
    let hasAnimated = false;

    function animateStats() {
        if (hasAnimated) return;

        const statsSection = $('.hero-stats');
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            hasAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                let current = 0;
                const increment = target / 100;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(counter);
                    }
                    stat.textContent = Math.floor(current);
                }, 20);
            });
        }
    }

    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = $$('.about-card, .event-card, .project-card, .team-card, .contact-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Hero Animations
function initializeHeroAnimations() {
    // Logo float animation
    const logo = $('.logo-main');
    if (logo) {
        logo.style.animation = 'logoFloat 3s ease-in-out infinite';
    }

    // Scroll indicator
    const scrollIndicator = $('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            scrollToSection('about');
        });
    }

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = $('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            const speed = scrolled * 0.5;
            heroContent.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Form Handlers
function initializeFormHandlers() {
    const contactForm = $('#contactForm');
    const joinForm = $('#joinForm');

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    if (joinForm) {
        joinForm.addEventListener('submit', handleJoinForm);
    }

    // Add floating label animation
    const formGroups = $$('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        const label = group.querySelector('label');

        if (input && label) {
            input.addEventListener('blur', () => {
                if (input.value) {
                    input.classList.add('has-value');
                } else {
                    input.classList.remove('has-value');
                }
            });
        }
    });
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        // Reset form
        e.target.reset();
        
        // Show success message
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
        
        // You can replace this with actual form submission logic
        console.log('Contact form submitted:', data);
        showNotification('Message sent successfully!', 'success');
    }, 1500);
}

function handleJoinForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        // Reset form
        e.target.reset();
        
        // Close modal
        closeJoinModal();
        
        // Show success message
        showNotification('Application submitted successfully! We\'ll contact you soon.', 'success');
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // You can replace this with actual form submission logic
        console.log('Join form submitted:', data);
    }, 1500);
}

// Modal Functions
function openJoinModal() {
    const modal = $('#joinModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeJoinModal() {
    const modal = $('#joinModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Make modal functions globally available
window.openJoinModal = openJoinModal;
window.closeJoinModal = closeJoinModal;

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00b894' : '#0984e3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        font-family: 'Poppins', sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Performance Optimizations
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll events
const optimizedScrollHandler = throttle(() => {
    updateActiveNavOnScroll();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// Optimize resize events
const optimizedResizeHandler = debounce(() => {
    // Reinitialize particle background for new screen size
    const particleBg = $('#particle-bg');
    if (particleBg) {
        particleBg.innerHTML = '';
        initializeParticleBackground();
    }
}, 250);

window.addEventListener('resize', optimizedResizeHandler);

// Touch Support for Mobile
function initializeTouchSupport() {
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - scroll to next section
                scrollToNextSection();
            } else {
                // Swipe down - scroll to previous section
                scrollToPreviousSection();
            }
        }
    }
}

function scrollToNextSection() {
    const sections = $$('section[id]');
    const currentScrollPos = window.scrollY;
    
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.offsetTop > currentScrollPos + 100) {
            scrollToSection(section.id);
            break;
        }
    }
}

function scrollToPreviousSection() {
    const sections = $$('section[id]');
    const currentScrollPos = window.scrollY;
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop < currentScrollPos - 100) {
            scrollToSection(section.id);
            break;
        }
    }
}

// Initialize touch support
initializeTouchSupport();

// Preloader (if needed)
function initializePreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <img src="images/logo1.png" alt="Loading..." class="preloader-logo">
            <div class="preloader-spinner"></div>
            <p>Loading amazing experience...</p>
        </div>
    `;
    
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0e1a;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(preloader);
    
    // Hide preloader when page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You can add error reporting here
});

// Service Worker registration (for PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add CSS for notifications
const notificationCSS = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const style = document.createElement('style');
style.textContent = notificationCSS;
document.head.appendChild(style);

console.log('🚀 Coding Club PRPCEM - Mobile-First Experience Loaded Successfully!');


