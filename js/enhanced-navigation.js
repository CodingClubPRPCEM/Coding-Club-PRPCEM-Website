/* Enhanced JavaScript for Coding Club PRPCEM - Neural Navigation */

// Utility Functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNeuralNavigation();
    initializeSearchFunctionality();
    initializeNewsletterSignup();
    initializeHeroAnimations();
    initializeParticleBackground();
    initializeScrollAnimations();
    initializeFormHandlers();
    initializeStatsCounter();
    initializeCodeRain();
    initializeTypingAnimation();
    initializePageSpecificFeatures();
});

// Enhanced Neural Network Navigation
function initializeNeuralNavigation() {
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
        cyberToggle?.classList.add('active');
        mobileNeuralMenu?.classList.add('active');
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
        cyberToggle?.classList.remove('active');
        mobileNeuralMenu?.classList.remove('active');
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

    // Handle mobile menu close button
    const mobileMenuClose = $('#mobileMenuClose');
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeNeuralMenu();
        });
    }

    // Handle neural node hover effects
    const desktopNodes = $$('.nav-node');
    desktopNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            createRippleEffect(node);
        });
        
        node.addEventListener('click', function() {
            createPulseEffect(node);
        });
    });

    // Update active navigation state based on current page
    updateActiveNavigation();
    
    // Handle escape key to close menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNeuralMenu?.classList.contains('active')) {
            closeNeuralMenu();
        }
    });
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
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Create pulse effect for neural nodes
function createPulseEffect(element) {
    const pulse = document.createElement('div');
    pulse.className = 'neural-pulse';
    pulse.style.cssText = `
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid rgba(139, 92, 246, 0.6);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: pulseEffect 0.4s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(pulse);
    
    setTimeout(() => {
        pulse.remove();
    }, 400);
}

// Update active navigation state
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navNodes = $$('.nav-node, .mobile-node');
    
    navNodes.forEach(node => {
        const href = node.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });
}

// Search Functionality
function initializeSearchFunctionality() {
    const searchTrigger = $('#searchTrigger');
    const searchBox = $('#searchBox');
    const searchClose = $('#searchClose');
    const navSearch = $('#navSearch');

    if (searchTrigger) {
        searchTrigger.addEventListener('click', function() {
            searchBox.classList.add('active');
            navSearch.focus();
        });
    }

    if (searchClose) {
        searchClose.addEventListener('click', function() {
            searchBox.classList.remove('active');
            navSearch.value = '';
        });
    }

    if (navSearch) {
        navSearch.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchBox.classList.remove('active');
                navSearch.value = '';
            } else if (e.key === 'Enter') {
                performSearch(navSearch.value);
            }
        });

        navSearch.addEventListener('input', function() {
            if (this.value.length > 2) {
                performLiveSearch(this.value);
            }
        });
    }

    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (searchBox && !searchBox.contains(e.target) && !searchTrigger.contains(e.target)) {
            searchBox.classList.remove('active');
        }
    });
}

function performSearch(query) {
    // Simple search functionality - can be enhanced with better search logic
    const searchablePages = [
        { title: 'Home', url: 'index.html', keywords: 'home main page coding club' },
        { title: 'About Us', url: 'about.html', keywords: 'about mission vision values team' },
        { title: 'Events', url: 'events.html', keywords: 'events workshops hackathons competitions' },
        { title: 'Projects', url: 'projects.html', keywords: 'projects portfolio github code' },
        { title: 'Team', url: 'team.html', keywords: 'team members leadership core developers' },
        { title: 'Contact', url: 'contact.html', keywords: 'contact email phone address location' }
    ];

    const results = searchablePages.filter(page => 
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.keywords.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
        // Navigate to first result
        window.location.href = results[0].url;
    } else {
        showNotification('No results found for "' + query + '"', 'info');
    }
}

function performLiveSearch(query) {
    // Live search suggestions - can be enhanced with dropdown
    console.log('Live searching for:', query);
}

// Newsletter Signup
function initializeNewsletterSignup() {
    const newsletterForm = $('#newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate newsletter signup
            showNotification('Successfully subscribed to newsletter!', 'success');
            this.reset();
        });
    }
}

// Smooth scrolling function for same-page links
function scrollToSection(sectionId) {
    const section = $(`#${sectionId}`);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;

// Particle Background Animation
function initializeParticleBackground() {
    const particleBg = $('#particle-bg');
    if (!particleBg) return;
    
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
}

// Hero Animations
function initializeHeroAnimations() {
    const heroElements = $$('.hero-content > *');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
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
                entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = $$('.section-header, .about-card, .event-card, .project-card, .team-card, .leader-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
}

// Stats Counter Animation
function initializeStatsCounter() {
    const statsNumbers = $$('.stat-number[data-target]');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = target;
            }
        };
        
        requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    statsNumbers.forEach(stat => observer.observe(stat));
}

// Code Rain Animation
function initializeCodeRain() {
    const codeRain = $('#codeRain');
    if (!codeRain) return;

    const chars = '0123456789ABCDEF</>(){}[];';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'code-column';
        column.style.cssText = `
            position: absolute;
            left: ${i * 20}px;
            top: -100px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            color: rgba(0, 212, 255, 0.3);
            animation: codeRainFall ${Math.random() * 3 + 2}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        for (let j = 0; j < 10; j++) {
            const char = document.createElement('div');
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.opacity = Math.random();
            column.appendChild(char);
        }
        
        codeRain.appendChild(column);
    }
}

// Typing Animation
function initializeTypingAnimation() {
    const typingText = $('#typingText');
    if (!typingText) return;

    const phrases = [
        'console.log("Hello, World!");',
        'const future = await innovation();',
        'git commit -m "Building tomorrow"',
        'npm install awesome-ideas',
        'python train_model.py --future',
        'SELECT * FROM opportunities;'
    ];

    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;

    function typeEffect() {
        const phrase = phrases[currentPhrase];
        
        if (isDeleting) {
            typingText.textContent = phrase.substring(0, currentChar - 1);
            currentChar--;
            
            if (currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                setTimeout(typeEffect, 500);
                return;
            }
        } else {
            typingText.textContent = phrase.substring(0, currentChar + 1);
            currentChar++;
            
            if (currentChar === phrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
                return;
            }
        }
        
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
}

// Form Handlers
function initializeFormHandlers() {
    const forms = $$('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    });

    // Enhanced form validation
    const inputs = $$('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('Message sent successfully!', 'success');
        form.reset();
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
    }, 1500);
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearFieldError(field);
    
    if (field.required && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    const error = document.createElement('div');
    error.className = 'field-error';
    error.style.cssText = `
        color: #f472b6;
        font-size: 0.75rem;
        margin-top: 0.25rem;
        opacity: 0;
        animation: slideInUp 0.3s ease-out forwards;
    `;
    error.textContent = message;
    
    field.parentNode.appendChild(error);
    field.style.borderColor = '#f472b6';
}

function clearFieldError(e) {
    const field = e.target || e;
    const error = field.parentNode.querySelector('.field-error');
    if (error) {
        error.remove();
    }
    field.style.borderColor = '';
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(59, 130, 246, 0.9)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        backdrop-filter: blur(10px);
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Page-specific features
function initializePageSpecificFeatures() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'events.html':
            initializeEventFilters();
            break;
        case 'projects.html':
            initializeProjectFilters();
            break;
        case 'contact.html':
            initializeFAQ();
            break;
        case 'team.html':
            initializeTeamInteractions();
            break;
    }
}

// Event page filters
function initializeEventFilters() {
    const filterTabs = $$('.filter-tab');
    const eventCards = $$('.event-card');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter events
            eventCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'slideInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Project page filters
function initializeProjectFilters() {
    const filterTabs = $$('.filter-tab');
    const projectCards = $$('.project-card');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'slideInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// FAQ interactions
function initializeFAQ() {
    const faqItems = $$('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = '0';
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// Team page interactions
function initializeTeamInteractions() {
    const leaderCards = $$('.leader-card');
    
    leaderCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Modal Functions
function openJoinModal() {
    const modal = $('#joinModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}

function closeJoinModal() {
    const modal = $('#joinModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Make modal functions globally available
window.openJoinModal = openJoinModal;
window.closeJoinModal = closeJoinModal;

// Add required CSS animations
const requiredStyles = document.createElement('style');
requiredStyles.textContent = `
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
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes rippleEffect {
        to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    
    @keyframes pulseEffect {
        to {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
        }
    }
    
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
            transform: translate(100vw, -100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes codeRainFall {
        to {
            transform: translateY(100vh);
        }
    }
    
    .neural-ripple {
        position: absolute !important;
    }
    
    .neural-pulse {
        position: absolute !important;
    }
    
    .notification {
        font-family: 'Space Grotesk', sans-serif;
    }
`;
document.head.appendChild(requiredStyles);
