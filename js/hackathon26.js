// Hackathon '26 - Cosmic Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all cosmic functionalities
    initCosmicNavigation();
    initMissionCountdown();
    initOrbitFAQ();
    initFleetGallery();
    initCosmicAnimations();
    initStellarScrolling();
    initCosmicParticles();
});

// Cosmic Navigation System
function initCosmicNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const cosmicNav = document.querySelector('.cosmic-nav');

    // Mobile navigation toggle
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

    // Stellar navigation highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
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

    // Cosmic navigation background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            cosmicNav.style.background = 'rgba(10, 10, 31, 0.98)';
            cosmicNav.style.boxShadow = '0 5px 25px rgba(0, 212, 255, 0.2)';
        } else {
            cosmicNav.style.background = 'rgba(10, 10, 31, 0.95)';
            cosmicNav.style.boxShadow = 'none';
        }
    });
}

// Mission Countdown Timer
function initMissionCountdown() {
    const missionDate = new Date('2025-11-26T09:00:00').getTime();
    
    function updateMissionTimer() {
        const now = new Date().getTime();
        const timeToMission = missionDate - now;

        if (timeToMission < 0) {
            document.querySelector('.countdown-display').innerHTML = `
                <div class="countdown-unit">
                    <div class="unit-display">
                        <span class="unit-number">LIVE</span>
                        <div class="unit-glow"></div>
                    </div>
                    <span class="unit-label">Mission Active!</span>
                </div>
            `;
            return;
        }

        const days = Math.floor(timeToMission / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeToMission % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeToMission % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeToMission % (1000 * 60)) / 1000);

        // Update countdown displays with cosmic effects
        updateCountdownUnit('days', days);
        updateCountdownUnit('hours', hours);
        updateCountdownUnit('minutes', minutes);
        updateCountdownUnit('seconds', seconds);
    }

    function updateCountdownUnit(id, value) {
        const element = document.getElementById(id);
        if (element) {
            const formattedValue = value.toString().padStart(2, '0');
            if (element.textContent !== formattedValue) {
                element.style.transform = 'scale(1.1)';
                element.textContent = formattedValue;
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            }
        }
    }

    updateMissionTimer();
    setInterval(updateMissionTimer, 1000);
}

// Orbital FAQ System
function initOrbitFAQ() {
    const faqItems = document.querySelectorAll('.faq-orbit-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.orbit-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ orbits
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked orbit if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                
                // Add cosmic effect
                const marker = question.querySelector('i');
                marker.style.color = '#00d4ff';
                marker.style.textShadow = '0 0 10px #00d4ff';
                
                setTimeout(() => {
                    marker.style.color = '';
                    marker.style.textShadow = '';
                }, 300);
            }
        });
    });
}

// Fleet Gallery System
function initFleetGallery() {
    const fleetVessels = document.querySelectorAll('.fleet-vessel');
    
    fleetVessels.forEach(vessel => {
        vessel.addEventListener('click', () => {
            const img = vessel.querySelector('img');
            showCosmicModal(img.src, img.alt);
        });
    });
}

function showCosmicModal(src, alt) {
    // Create cosmic modal if it doesn't exist
    let modal = document.getElementById('cosmic-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cosmic-modal';
        modal.className = 'cosmic-modal';
        modal.innerHTML = `
            <div class="modal-void"></div>
            <div class="modal-vessel">
                <img src="" alt="" id="modal-image">
                <button class="modal-close-orbit">&times;</button>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add cosmic modal styles
        const cosmicStyles = `
            .cosmic-modal {
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
            
            .modal-void {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(10, 10, 31, 0.95);
                backdrop-filter: blur(10px);
            }
            
            .modal-vessel {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                z-index: 1;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 0 60px rgba(0, 212, 255, 0.4);
            }
            
            #modal-image {
                max-width: 100%;
                max-height: 100%;
                display: block;
            }
            
            .modal-close-orbit {
                position: absolute;
                top: -50px;
                right: 0;
                background: linear-gradient(45deg, var(--cosmic-primary), var(--cosmic-secondary));
                color: var(--space-void);
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                font-size: 1.8rem;
                cursor: pointer;
                font-weight: bold;
                transition: var(--cosmic-transition);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
            }
            
            .modal-close-orbit:hover {
                transform: scale(1.1) rotate(90deg);
                box-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
            }
        `;
        
        if (!document.getElementById('cosmic-modal-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'cosmic-modal-styles';
            styleSheet.textContent = cosmicStyles;
            document.head.appendChild(styleSheet);
        }
        
        // Close modal events
        modal.querySelector('.modal-void').addEventListener('click', closeCosmicModal);
        modal.querySelector('.modal-close-orbit').addEventListener('click', closeCosmicModal);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeCosmicModal();
            }
        });
    }
    
    // Show modal with cosmic effects
    modal.querySelector('#modal-image').src = src;
    modal.querySelector('#modal-image').alt = alt;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transition = 'opacity 0.3s ease-out';
    }, 10);
}

function closeCosmicModal() {
    const modal = document.getElementById('cosmic-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Stellar Smooth Scrolling
function initStellarScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100;
                
                // Add stellar trail effect during scroll
                createStellarTrail();
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function createStellarTrail() {
    const trail = document.createElement('div');
    trail.className = 'stellar-trail';
    trail.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        background: #00d4ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 10px #00d4ff;
        animation: stellar-fade 1s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    
    // Add fade animation
    const fadeKeyframes = `
        @keyframes stellar-fade {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(3); }
        }
    `;
    
    if (!document.getElementById('stellar-trail-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'stellar-trail-styles';
        styleSheet.textContent = fadeKeyframes;
        document.head.appendChild(styleSheet);
    }
    
    setTimeout(() => {
        trail.remove();
    }, 1000);
}

// Cosmic Animations on Scroll
function initCosmicAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const cosmicObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add cosmic glow effect
                if (entry.target.classList.contains('reward-planet')) {
                    entry.target.style.boxShadow = '0 0 50px rgba(0, 212, 255, 0.3)';
                }
            }
        });
    }, observerOptions);
    
    // Observe cosmic elements
    const cosmicElements = document.querySelectorAll('.reward-planet, .timeline-waypoint, .control-console, .fleet-vessel, .partner-planet');
    
    cosmicElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.8s ease-out';
        cosmicObserver.observe(el);
    });
}

// Cosmic Particle System
function initCosmicParticles() {
    createStarField();
    createFloatingParticles();
    enhanceShootingStars();
}

function createStarField() {
    const starField = document.querySelector('.stars-layer.layer-1');
    if (!starField) return;
    
    // Create dynamic stars
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'dynamic-star';
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: #ffffff;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.8 + 0.2};
            animation: cosmic-twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
            animation-delay: ${Math.random() * 2}s;
            box-shadow: 0 0 ${Math.random() * 6 + 2}px currentColor;
        `;
        
        starField.appendChild(star);
    }
    
    // Add twinkling animation
    if (!document.getElementById('cosmic-twinkle-styles')) {
        const twinkleKeyframes = `
            @keyframes cosmic-twinkle {
                0% { opacity: 0.2; transform: scale(0.8); }
                100% { opacity: 1; transform: scale(1.2); }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'cosmic-twinkle-styles';
        styleSheet.textContent = twinkleKeyframes;
        document.head.appendChild(styleSheet);
    }
}

function createFloatingParticles() {
    const particleContainer = document.querySelector('.cosmic-bg');
    if (!particleContainer) return;
    
    const cosmicIcons = ['⭐', '🌟', '✨', '🚀', '🛸', '💫', '🌠', '🌌'];
    
    function createCosmicParticle() {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        particle.textContent = cosmicIcons[Math.floor(Math.random() * cosmicIcons.length)];
        particle.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: 100%;
            font-size: ${Math.random() * 1.5 + 0.8}rem;
            opacity: ${Math.random() * 0.7 + 0.3};
            pointer-events: none;
            color: #00d4ff;
            text-shadow: 0 0 10px currentColor;
            animation: cosmic-float ${Math.random() * 6 + 4}s linear forwards;
            z-index: 1;
        `;
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }
    
    // Add floating animation
    if (!document.getElementById('cosmic-float-styles')) {
        const floatKeyframes = `
            @keyframes cosmic-float {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.7;
                }
                50% {
                    opacity: 1;
                    transform: translateY(-50vh) rotate(180deg);
                }
                100% {
                    transform: translateY(-120vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'cosmic-float-styles';
        styleSheet.textContent = floatKeyframes;
        document.head.appendChild(styleSheet);
    }
    
    // Create particles periodically
    setInterval(createCosmicParticle, 3000);
}

function enhanceShootingStars() {
    const shootingContainer = document.querySelector('.shooting-stars');
    if (!shootingContainer) return;
    
    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'enhanced-shooting-star';
        star.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: linear-gradient(45deg, #ffffff, #00d4ff);
            border-radius: 50%;
            top: ${Math.random() * 50}%;
            left: -10%;
            box-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff;
            animation: enhanced-shooting ${Math.random() * 3 + 2}s linear forwards;
        `;
        
        shootingContainer.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 5000);
    }
    
    // Add enhanced shooting animation
    if (!document.getElementById('enhanced-shooting-styles')) {
        const shootingKeyframes = `
            @keyframes enhanced-shooting {
                0% {
                    transform: translateX(0) translateY(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateX(120vw) translateY(-80px);
                    opacity: 0;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'enhanced-shooting-styles';
        styleSheet.textContent = shootingKeyframes;
        document.head.appendChild(styleSheet);
    }
    
    // Create shooting stars periodically
    setInterval(createShootingStar, 4000);
}

// Mission Registration Handler
function handleRegistration() {
    // Create cosmic registration alert
    const alert = document.createElement('div');
    alert.className = 'cosmic-alert';
    alert.innerHTML = `
        <div class="alert-content">
            <i class="fas fa-rocket"></i>
            <h3>Mission Registration</h3>
            <p>Prepare for cosmic adventure! Registration portal will be available soon.</p>
            <button onclick="this.parentElement.parentElement.remove()">Acknowledged</button>
        </div>
    `;
    alert.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(10, 10, 31, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        backdrop-filter: blur(10px);
    `;
    
    const alertStyles = `
        .cosmic-alert .alert-content {
            background: linear-gradient(45deg, var(--space-card), var(--space-nebula));
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
            border: 2px solid var(--cosmic-primary);
            box-shadow: 0 0 50px rgba(0, 212, 255, 0.4);
            max-width: 400px;
        }
        
        .cosmic-alert .alert-content i {
            font-size: 3rem;
            color: var(--cosmic-primary);
            margin-bottom: 1rem;
            display: block;
            animation: rocket-pulse 2s ease-in-out infinite;
        }
        
        .cosmic-alert .alert-content h3 {
            font-family: var(--font-space);
            color: var(--star-white);
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
        
        .cosmic-alert .alert-content p {
            color: var(--star-silver);
            margin-bottom: 2rem;
            line-height: 1.6;
        }
        
        .cosmic-alert .alert-content button {
            background: linear-gradient(45deg, var(--cosmic-primary), var(--cosmic-secondary));
            color: var(--space-void);
            border: none;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--cosmic-transition);
        }
        
        .cosmic-alert .alert-content button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
        }
        
        @keyframes rocket-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    
    if (!document.getElementById('cosmic-alert-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'cosmic-alert-styles';
        styleSheet.textContent = alertStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(alert);
}

// Cosmic Contact Handler
function handleCosmicContact(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Simulate transmission
    console.log('Cosmic transmission sent:', Object.fromEntries(formData));
    
    // Show cosmic success message
    const successMsg = document.createElement('div');
    successMsg.innerHTML = '🚀 Transmission successful! Ground control will respond soon.';
    successMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, var(--cosmic-primary), var(--cosmic-secondary));
        color: var(--space-void);
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
        animation: cosmic-slide-in 0.5s ease-out;
    `;
    
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.remove();
    }, 5000);
    
    event.target.reset();
}

// Performance Optimization for Cosmic Effects
function optimizeCosmicPerformance() {
    // Throttle scroll events for better performance
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
    
    // Lazy load cosmic effects
    const lazyElements = document.querySelectorAll('[data-cosmic-lazy]');
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('cosmic-active');
                lazyObserver.unobserve(entry.target);
            }
        });
    });
    
    lazyElements.forEach(el => lazyObserver.observe(el));
}

// Initialize additional cosmic effects on load
window.addEventListener('load', () => {
    optimizeCosmicPerformance();
    
    // Add cosmic loading complete effect
    document.body.classList.add('cosmic-loaded');
    
    // Create welcome transmission
    setTimeout(() => {
        createWelcomeTransmission();
    }, 1000);
});

function createWelcomeTransmission() {
    const transmission = document.createElement('div');
    transmission.className = 'welcome-transmission';
    transmission.innerHTML = `
        <div class="transmission-content">
            <i class="fas fa-satellite-dish"></i>
            <span>WELCOME TO HACKATHON '26 MISSION BRIEFING</span>
        </div>
    `;
    transmission.style.cssText = `
        position: fixed;
        top: 100px;
        right: -400px;
        background: rgba(0, 212, 255, 0.9);
        color: var(--space-void);
        padding: 1rem 2rem;
        border-radius: 50px 0 0 50px;
        font-family: var(--font-space);
        font-weight: 600;
        z-index: 1001;
        box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
        transition: right 0.8s ease-out;
    `;
    
    document.body.appendChild(transmission);
    
    // Slide in
    setTimeout(() => {
        transmission.style.right = '0px';
    }, 100);
    
    // Slide out
    setTimeout(() => {
        transmission.style.right = '-400px';
        setTimeout(() => {
            transmission.remove();
        }, 800);
    }, 4000);
}

// Export cosmic functions for global access
window.hackathonFunctions = {
    handleRegistration,
    handleCosmicContact,
    showCosmicModal,
    closeCosmicModal
};