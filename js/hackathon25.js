// Hackathon '25 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initCountdown();
    initFAQ();
    initGallery();
    initAnimations();
    initSmoothScrolling();
    initProblemFiltering();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active nav link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.hackathon-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// Countdown Timer
function initCountdown() {
    const eventDate = new Date('2025-11-26T09:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            document.querySelector('.countdown-timer').innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">LIVE</span>
                    <span class="countdown-label">Event Started!</span>
                </div>
            `;
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Gallery Modal
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            showModal(img.src, img.alt);
        });
    });
}

function showModal(src, alt) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('gallery-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'gallery-modal';
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <img src="" alt="" id="modal-image">
                <button class="modal-close">&times;</button>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add modal styles
        const styles = `
            .gallery-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: none;
                align-items: center;
                justify-content: center;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(5px);
            }
            
            .modal-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                z-index: 1;
            }
            
            #modal-image {
                max-width: 100%;
                max-height: 100%;
                border-radius: 10px;
                box-shadow: 0 0 50px rgba(0, 255, 136, 0.3);
            }
            
            .modal-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: var(--hack-primary);
                color: var(--hack-bg-dark);
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                font-weight: bold;
                transition: var(--hack-transition);
            }
            
            .modal-close:hover {
                transform: scale(1.1);
            }
        `;
        
        if (!document.getElementById('modal-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'modal-styles';
            styleSheet.textContent = styles;
            document.head.appendChild(styleSheet);
        }
        
        // Close modal events
        modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }
    
    // Show modal with image
    modal.querySelector('#modal-image').src = src;
    modal.querySelector('#modal-image').alt = alt;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Problem Statement Filtering
function initProblemFiltering() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const problemCards = document.querySelectorAll('.problem-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter problems
            problemCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Animation on Scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.prize-card, .timeline-item, .problem-card, .gallery-item, .contact-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Particle Background Effect
function createParticles() {
    const particleContainer = document.querySelector('.floating-icons');
    if (!particleContainer) return;
    
    const icons = ['💻', '🚀', '⚡', '🔧', '💡', '🎯', '🏆', '⭐'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = icons[Math.floor(Math.random() * icons.length)];
        particle.style.position = 'absolute';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.fontSize = '1rem';
        particle.style.opacity = '0.3';
        particle.style.pointerEvents = 'none';
        particle.style.animation = `floatUp ${3 + Math.random() * 4}s linear forwards`;
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 7000);
    }
    
    // Add CSS for particle animation
    if (!document.getElementById('particle-styles')) {
        const particleStyles = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.3;
                }
                50% {
                    opacity: 0.6;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'particle-styles';
        styleSheet.textContent = particleStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
}

// Typing Animation for Hero Title
function initTypingAnimation() {
    const hackTitle = document.querySelector('.title-hack');
    if (!hackTitle) return;
    
    const text = 'HACKATHON';
    let index = 0;
    
    hackTitle.textContent = '';
    
    function typeText() {
        if (index < text.length) {
            hackTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 150);
        }
    }
    
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
}

// Matrix Rain Effect Enhancement
function enhanceMatrixEffect() {
    const matrixContainer = document.querySelector('.matrix-rain');
    if (!matrixContainer) return;
    
    // Create matrix characters
    const chars = '01010101010101010101010101010101';
    let matrixHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.position = 'absolute';
        column.style.left = Math.random() * 100 + '%';
        column.style.top = '-100px';
        column.style.color = 'var(--hack-primary)';
        column.style.fontSize = '12px';
        column.style.opacity = '0.1';
        column.style.animation = `matrixFall ${2 + Math.random() * 3}s linear infinite`;
        column.style.animationDelay = Math.random() * 2 + 's';
        column.textContent = chars.substring(0, Math.floor(Math.random() * 10) + 5);
        
        matrixContainer.appendChild(column);
    }
    
    // Add matrix fall animation
    if (!document.getElementById('matrix-styles')) {
        const matrixStyles = `
            @keyframes matrixFall {
                0% {
                    transform: translateY(-100px);
                    opacity: 0;
                }
                10% {
                    opacity: 0.1;
                }
                90% {
                    opacity: 0.1;
                }
                100% {
                    transform: translateY(100vh);
                    opacity: 0;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'matrix-styles';
        styleSheet.textContent = matrixStyles;
        document.head.appendChild(styleSheet);
    }
}

// Initialize additional effects
window.addEventListener('load', () => {
    createParticles();
    initTypingAnimation();
    enhanceMatrixEffect();
});

// Registration Form Handler
function handleRegistration() {
    // This would typically connect to your registration API
    alert('Registration functionality will be available soon! Stay tuned for updates.');
}

// Contact Form Handler (if added later)
function handleContact(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Here you would typically send the data to your server
    console.log('Contact form submitted:', Object.fromEntries(formData));
    alert('Message sent successfully! We\'ll get back to you soon.');
    event.target.reset();
}

// Performance optimizations
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Throttle scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 16); // ~60fps
    };
}

// Initialize performance optimizations
optimizePerformance();

// Export functions for global access
window.hackathonFunctions = {
    handleRegistration,
    handleContact,
    showModal,
    closeModal
};