/* Main JavaScript for Coding Club PRPCEM */

document.addEventListener('DOMContentLoaded', function() {
    // Add particle animations keyframes
    addParticleAnimations();
    
    // Initialize page components
    initializeNeuralNavigation();
    initializeHeroAnimations();
    initializeParticleBackground();
    addStarryBackground();
    initializeScrollAnimations();
    initializeTypingAnimation();
    initializeStatsCounter();
    initializeCodeRain();
    initializeTooltips();
    initializeGlitchEffect();
    initializeHoverEffects();
    checkReducedMotion();
    initializePageSpecificFeatures();
    
    // Mobile menu toggle (for all pages)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
        });
    }
});

// Add a starry background effect
function addStarryBackground() {
    const particleBg = document.getElementById('particleBg');
    if (!particleBg) return;
    
    // Add stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random size for stars
        const size = Math.random() * 2 + 1;
        
        // Styling
        star.style.position = 'absolute';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.borderRadius = '50%';
        star.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        star.style.boxShadow = '0 0 4px rgba(255, 255, 255, 0.8)';
        
        // Random positioning
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random blinking animation
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        star.style.animation = `blinkStar ${duration}s ${delay}s infinite ease-in-out`;
        
        particleBg.appendChild(star);
    }
}

// Neural Navigation System
function initializeNeuralNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link, .neural-node');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.classList.toggle('open');
            
            // Neural animation effect
            if (!mobileMenu.classList.contains('hidden')) {
                const nodes = mobileMenu.querySelectorAll('a');
                nodes.forEach((node, index) => {
                    node.style.opacity = '0';
                    node.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        node.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        node.style.opacity = '1';
                        node.style.transform = 'translateY(0)';
                    }, 50 * index);
                });
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.classList.remove('open');
            });
        });
    }
    
    // Neural connection effect on nav links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            createNeuralEffect(link);
        });
    });
    
    // Dynamic navigation highlighting based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        let scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('text-tech-blue');
            } else {
                document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('text-tech-blue');
            }
        });
    });
}

function createNeuralEffect(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 5; i++) {
        const neuron = document.createElement('div');
        neuron.classList.add('neural-particle');
        
        neuron.style.position = 'fixed';
        neuron.style.left = `${centerX}px`;
        neuron.style.top = `${centerY}px`;
        neuron.style.width = '2px';
        neuron.style.height = '2px';
        neuron.style.backgroundColor = getRandomColor();
        neuron.style.borderRadius = '50%';
        neuron.style.filter = 'blur(1px)';
        neuron.style.zIndex = '100';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 30;
        const speed = Math.random() * 0.5 + 0.5;
        
        neuron.style.transition = `all ${speed}s ease-out`;
        
        document.body.appendChild(neuron);
        
        setTimeout(() => {
            neuron.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            neuron.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            document.body.removeChild(neuron);
        }, speed * 1000);
    }
}

// Hero Section Animations
function initializeHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero-animate');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Add interactive 3D tilt effect to hero image
    const heroImage = document.querySelector('.hero-animate img');
    if (heroImage) {
        const container = heroImage.parentElement;
        
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
            const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1
            
            heroImage.style.transform = `perspective(1000px) rotateY(${xPercent * 5}deg) rotateX(${yPercent * -5}deg) scale3d(1.05, 1.05, 1.05)`;
            
            // Move glow effect
            const glowElement = container.querySelector('div');
            if (glowElement) {
                glowElement.style.transform = `translate(${xPercent * 10 + 4}px, ${yPercent * 10 + 4}px)`;
            }
        });
        
        container.addEventListener('mouseleave', () => {
            heroImage.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
            
            const glowElement = container.querySelector('div');
            if (glowElement) {
                glowElement.style.transform = 'translate(4px, 4px)';
            }
        });
    }
}

// Advanced Particle Background
function initializeParticleBackground() {
    const particleBg = document.getElementById('particleBg');
    
    if (!particleBg) return;
    
    // Clear any existing content
    particleBg.innerHTML = '';
    
    // Create a more visible tech-themed background
    createMatrixBackground(particleBg);
    
    // Add floating particles with connections
    addFloatingParticles(particleBg);
}

// Create a matrix-like digital rain effect
function createMatrixBackground(container) {
    // Add a subtle grid effect
    const grid = document.createElement('div');
    grid.classList.add('grid-overlay');
    grid.style.position = 'absolute';
    grid.style.inset = '0';
    grid.style.backgroundImage = 'linear-gradient(to right, rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px)';
    grid.style.backgroundSize = '40px 40px';
    grid.style.zIndex = '-2';
    container.appendChild(grid);
    
    // Add matrix digital rain
    for (let i = 0; i < 20; i++) {
        const rain = document.createElement('div');
        rain.classList.add('digital-rain');
        rain.style.position = 'absolute';
        rain.style.top = '0';
        rain.style.left = `${i * 5}%`;
        rain.style.width = '2px';
        rain.style.height = '100%';
        rain.style.zIndex = '-1';
        rain.style.opacity = '0.1';
        rain.style.background = 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3), transparent)';
        
        // Add animation with random duration and delay
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 5;
        rain.style.animation = `digitalRain ${duration}s ${delay}s infinite`;
        container.appendChild(rain);
    }
}

// Add floating particles with connections
function addFloatingParticles(container) {
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('floating-particle');
        
        // Styling
        const size = Math.random() * 4 + 2;
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.background = 'rgba(59, 130, 246, 0.5)';
        particle.style.boxShadow = '0 0 8px rgba(59, 130, 246, 0.7)';
        
        // Positioning
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animation
        const duration = Math.random() * 20 + 20;
        const delay = Math.random() * 10;
        particle.style.animation = `floatAround ${duration}s ${delay}s infinite linear`;
        
        container.appendChild(particle);
    }
    
    // Create a few connections between particles
    setTimeout(() => {
        const particles = container.querySelectorAll('.floating-particle');
        if (particles.length > 1) {
            for (let i = 0; i < Math.min(10, particles.length / 2); i++) {
                const sourceIndex = Math.floor(Math.random() * particles.length);
                let targetIndex;
                do {
                    targetIndex = Math.floor(Math.random() * particles.length);
                } while (targetIndex === sourceIndex);
                
                createParticleConnection(container, particles[sourceIndex], particles[targetIndex]);
            }
        }
    }, 1000);
}

// Create a connection between two particles
function createParticleConnection(container, source, target) {
    const connection = document.createElement('div');
    connection.classList.add('particle-connection');
    connection.style.position = 'absolute';
    connection.style.zIndex = '-1';
    connection.style.height = '1px';
    connection.style.background = 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))';
    connection.style.transformOrigin = 'left center';
    connection.style.animation = 'pulseOpacity 4s infinite ease-in-out';
    
    // Calculate positions
    const updateConnection = () => {
        const sourceRect = source.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const sourceX = sourceRect.left - containerRect.left + sourceRect.width / 2;
        const sourceY = sourceRect.top - containerRect.top + sourceRect.height / 2;
        const targetX = targetRect.left - containerRect.left + targetRect.width / 2;
        const targetY = targetRect.top - containerRect.top + targetRect.height / 2;
        
        const dx = targetX - sourceX;
        const dy = targetY - sourceY;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        connection.style.width = `${length}px`;
        connection.style.left = `${sourceX}px`;
        connection.style.top = `${sourceY}px`;
        connection.style.transform = `rotate(${angle}deg)`;
    };
    
    updateConnection();
    container.appendChild(connection);
    
    // Update connection position periodically
    setInterval(updateConnection, 1000);
}

// Advanced Scroll Animations with Intersection Observer

// Create subtle grid lines for background
function createGridLines(container) {
    // Create horizontal lines
    for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.classList.add('grid-line');
        line.style.position = 'absolute';
        line.style.left = '0';
        line.style.right = '0';
        line.style.top = `${i * 10}%`;
        line.style.height = '1px';
        line.style.background = 'rgba(59, 130, 246, 0.03)';
        line.style.zIndex = '-2';
        container.appendChild(line);
    }
    
    // Create vertical lines
    for (let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.classList.add('grid-line');
        line.style.position = 'absolute';
        line.style.top = '0';
        line.style.bottom = '0';
        line.style.left = `${i * 10}%`;
        line.style.width = '1px';
        line.style.background = 'rgba(59, 130, 246, 0.03)';
        line.style.zIndex = '-2';
        container.appendChild(line);
    }
}

// Create subtle connections between particles
function createConnection(container, sourceParticle) {
    const connection = document.createElement('div');
    connection.classList.add('particle-connection');
    connection.style.position = 'absolute';
    connection.style.zIndex = '-1';
    connection.style.height = '1px';
    connection.style.background = 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(130, 71, 229, 0.1))';
    connection.style.transformOrigin = 'left center';
    connection.style.opacity = '0.2';
    connection.style.animation = 'pulseConnection 4s infinite ease-in-out';
    
    // Position at source particle
    const sourceLeft = parseFloat(sourceParticle.style.left);
    const sourceTop = parseFloat(sourceParticle.style.top);
    
    // Pick a random destination within reasonable distance
    const destLeft = Math.max(0, Math.min(100, sourceLeft + (Math.random() * 20 - 10)));
    const destTop = Math.max(0, Math.min(100, sourceTop + (Math.random() * 20 - 10)));
    
    // Calculate length and angle
    const dx = destLeft - sourceLeft;
    const dy = destTop - sourceTop;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    // Apply styles
    connection.style.width = `${length}vw`;
    connection.style.left = `${sourceLeft}%`;
    connection.style.top = `${sourceTop}%`;
    connection.style.transform = `rotate(${angle}deg)`;
    
    container.appendChild(connection);
}

function connectParticles(container, sourceParticle) {
    const particles = container.querySelectorAll('.particle');
    
    if (particles.length < 2) return;
    
    const targetParticle = particles[Math.floor(Math.random() * particles.length)];
    if (targetParticle === sourceParticle) return;
    
    const connection = document.createElement('div');
    connection.classList.add('particle-connection');
    
    const sourceRect = sourceParticle.getBoundingClientRect();
    const targetRect = targetParticle.getBoundingClientRect();
    
    const dx = targetRect.left - sourceRect.left;
    const dy = targetRect.top - sourceRect.top;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    connection.style.position = 'absolute';
    connection.style.width = `${distance}px`;
    connection.style.height = '1px';
    connection.style.background = 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)';
    connection.style.left = `${sourceRect.left}px`;
    connection.style.top = `${sourceRect.top}px`;
    connection.style.transform = `rotate(${angle}deg)`;
    connection.style.transformOrigin = '0 0';
    connection.style.opacity = '0.2';
    connection.style.zIndex = '-1';
    
    container.appendChild(connection);
    
    // Animate the connection
    setTimeout(() => {
        connection.style.opacity = '0';
    }, 2000);
    
    setTimeout(() => {
        container.removeChild(connection);
    }, 3000);
}

function getRandomColor() {
    const colors = [
        '#00d4ff', // tech-blue
        '#8b5cf6', // tech-purple
        '#f472b6', // tech-pink
        '#10b981', // tech-green
        '#00ffff', // neon-blue
        '#bf00ff'  // neon-purple
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add particle animation keyframes
function addParticleAnimations() {
    // Check if the style element already exists
    if (document.getElementById('particle-animations')) {
        return;
    }
    
    const styleEl = document.createElement('style');
    styleEl.id = 'particle-animations';
    
    const keyframes = `
        @keyframes floatAround {
            0% { transform: translate(0, 0); }
            25% { transform: translate(50px, 30px); }
            50% { transform: translate(0, 60px); }
            75% { transform: translate(-50px, 30px); }
            100% { transform: translate(0, 0); }
        }
        
        @keyframes pulseOpacity {
            0% { opacity: 0.2; }
            50% { opacity: 0.5; }
            100% { opacity: 0.2; }
        }
        
        @keyframes digitalRain {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }
        
        @keyframes blinkStar {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.8; }
        }
    `;
    
    styleEl.textContent = keyframes;
    document.head.appendChild(styleEl);
}

// Advanced Scroll Animations with Intersection Observer
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add unique entrance animations based on data attributes
                const element = entry.target;
                const animationType = element.dataset.animation || 'fade-up';
                
                element.classList.add('animate-in', animationType);
                observer.unobserve(element);
                
                // Special handling for grid items to create staggered animation
                if (element.parentElement.classList.contains('grid')) {
                    const siblings = Array.from(element.parentElement.children);
                    const index = siblings.indexOf(element);
                    element.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, options);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Advanced Typing Animation with Cursor
function initializeTypingAnimation() {
    const typingElements = document.querySelectorAll('[data-type-text]');
    
    typingElements.forEach(element => {
        const text = element.getAttribute('data-type-text');
        const speed = parseInt(element.getAttribute('data-type-speed') || '100');
        const startDelay = parseInt(element.getAttribute('data-type-delay') || '0');
        
        element.textContent = '';
        element.classList.add('animate-type-cursor');
        
        setTimeout(() => {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    // Add random typing delay for realism
                    const randomDelay = Math.random() < 0.1;
                    if (randomDelay) {
                        setTimeout(() => {
                            element.textContent += text.charAt(i);
                            i++;
                        }, speed * 3);
                    } else {
                        element.textContent += text.charAt(i);
                        i++;
                    }
                } else {
                    clearInterval(typingInterval);
                    
                    // Keep cursor for a while, then remove
                    setTimeout(() => {
                        element.classList.remove('animate-type-cursor');
                    }, 2000);
                }
            }, speed);
        }, startDelay);
    });
}

// Stats Counter Animation
function initializeStatsCounter() {
    const statElements = document.querySelectorAll('[data-count-to]');
    
    const options = {
        threshold: 1.0,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetCount = parseInt(element.getAttribute('data-count-to'));
                const duration = parseInt(element.getAttribute('data-count-duration') || '2000');
                
                animateCounter(element, targetCount, duration);
                observer.unobserve(element);
            }
        });
    }, options);
    
    statElements.forEach(element => {
        observer.observe(element);
    });
}

function animateCounter(element, targetCount, duration) {
    let startTime = null;
    const startCount = 0;
    
    function updateCount(timestamp) {
        if (!startTime) startTime = timestamp;
        
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (targetCount - startCount) + startCount);
        
        element.textContent = currentCount + (element.getAttribute('data-count-suffix') || '');
        
        if (progress < 1) {
            window.requestAnimationFrame(updateCount);
        } else {
            element.textContent = targetCount + (element.getAttribute('data-count-suffix') || '');
        }
    }
    
    window.requestAnimationFrame(updateCount);
}

// Matrix-style Code Rain Effect
function initializeCodeRain() {
    const codeRainElements = document.querySelectorAll('.code-rain');
    
    codeRainElements.forEach(container => {
        const canvas = document.createElement('canvas');
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.3';
        
        container.style.position = 'relative';
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        
        // Matrix characters
        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
        
        // Create drops
        const columns = Math.floor(canvas.width / 20);
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -canvas.height);
        }
        
        function draw() {
            ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00d4ff';
            ctx.font = '15px "JetBrains Mono"';
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * 20, drops[i] * 1);
                
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const interval = setInterval(draw, 60);
                    container.dataset.rainInterval = interval;
                } else {
                    clearInterval(container.dataset.rainInterval);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(container);
        
        // Resize handling
        window.addEventListener('resize', () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        });
    });
}

// Interactive Tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip bg-bg-dark-secondary/90 backdrop-blur-sm text-text-primary px-3 py-2 rounded-lg text-sm shadow-neon-sm z-50 absolute';
            tooltip.textContent = tooltipText;
            
            document.body.appendChild(tooltip);
            
            const rect = element.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            
            tooltip.style.top = `${rect.top - tooltipRect.height - 10 + window.scrollY}px`;
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltipRect.width / 2)}px`;
            
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
            tooltip.style.transition = 'opacity 0.3s, transform 0.3s';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
            }, 10);
            
            element.dataset.tooltipElement = 'active';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    document.body.removeChild(tooltip);
                }, 300);
            }
            
            delete element.dataset.tooltipElement;
        });
    });
}

// Glitch Text Effect
function initializeGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    
    glitchElements.forEach(element => {
        const originalText = element.textContent;
        let isGlitching = false;
        
        element.addEventListener('mouseenter', () => {
            if (isGlitching) return;
            isGlitching = true;
            
            let iterations = 0;
            const maxIterations = 6;
            const interval = setInterval(() => {
                element.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations || char === ' ') {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                
                iterations += 1/3;
                
                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    element.textContent = originalText;
                    isGlitching = false;
                }
            }, 50);
        });
    });
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|[];\',./`~';
}

// Advanced Hover Effects
function initializeHoverEffects() {
    const cardElements = document.querySelectorAll('.card');
    
    cardElements.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const xPercent = (x - centerX) / centerX; // -1 to 1
            const yPercent = (y - centerY) / centerY; // -1 to 1
            
            // Subtle rotation effect
            card.style.transform = `perspective(1000px) rotateY(${xPercent * 2}deg) rotateX(${yPercent * -2}deg)`;
            
            // Add highlight effect
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 212, 255, 0.1), transparent 50%)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
            card.style.background = '';
        });
    });
}

// Check for reduced motion preference
function checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.classList.add('reduced-motion');
        
        // Remove animations
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation: none !important;
                transition: none !important;
            }
            
            .particle, .neural-particle, .particle-connection {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Page-specific features
function initializePageSpecificFeatures() {
    // Check current page based on URL or body id
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop().split('.')[0] || 'index';
    
    switch (pageName) {
        case 'index':
            // Homepage specific animations
            break;
        case 'about':
            initializeTimeline();
            break;
        case 'events':
            initializeEventFilters();
            break;
        case 'projects':
            initializeProjectFilters();
            break;
        case 'team':
            initializeTeamMemberCards();
            break;
        case 'contact':
            initializeFormValidation();
            initializeFAQAccordions();
            break;
    }
}

// Timeline animation for About page
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('timeline-active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Event filters for Events page
function initializeEventFilters() {
    const filterButtons = document.querySelectorAll('.event-filter');
    const eventCards = document.querySelectorAll('.event-card');
    
    if (filterButtons.length && eventCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('bg-tech-blue', 'text-white'));
                button.classList.add('bg-tech-blue', 'text-white');
                
                // Filter events
                eventCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.classList.remove('opacity-0', 'scale-95');
                        }, 10);
                    } else {
                        card.classList.add('opacity-0', 'scale-95');
                        setTimeout(() => {
                            card.classList.add('hidden');
                        }, 300);
                    }
                });
            });
        });
    }
}

// Project filters for Projects page
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.project-filter');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('bg-tech-blue', 'text-white'));
                button.classList.add('bg-tech-blue', 'text-white');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.classList.remove('opacity-0', 'scale-95');
                        }, 10);
                    } else {
                        card.classList.add('opacity-0', 'scale-95');
                        setTimeout(() => {
                            card.classList.add('hidden');
                        }, 300);
                    }
                });
            });
        });
    }
}

// Project modal for Projects page
function initializeProjectModal() {
    const projectLinks = document.querySelectorAll('.project-modal-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const projectId = link.getAttribute('data-project-id');
            const modalContent = document.querySelector(`#project-modal-${projectId}`);
            
            if (modalContent) {
                const modalOverlay = document.createElement('div');
                modalOverlay.className = 'fixed inset-0 bg-bg-dark/80 backdrop-blur-md z-50 flex items-center justify-center p-4';
                
                const modalContainer = document.createElement('div');
                modalContainer.className = 'bg-bg-dark-secondary rounded-xl shadow-neon-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto';
                modalContainer.innerHTML = modalContent.innerHTML;
                
                // Add close button
                const closeButton = document.createElement('button');
                closeButton.className = 'absolute top-4 right-4 text-text-secondary hover:text-tech-blue text-xl';
                closeButton.innerHTML = '<i class="fas fa-times"></i>';
                closeButton.addEventListener('click', () => {
                    modalOverlay.classList.add('opacity-0');
                    setTimeout(() => {
                        document.body.removeChild(modalOverlay);
                    }, 300);
                });
                
                modalContainer.appendChild(closeButton);
                modalOverlay.appendChild(modalContainer);
                
                // Animation
                modalOverlay.style.opacity = '0';
                modalContainer.style.transform = 'scale(0.95)';
                modalContainer.style.transition = 'transform 0.3s ease-out';
                modalOverlay.style.transition = 'opacity 0.3s ease-out';
                
                document.body.appendChild(modalOverlay);
                
                setTimeout(() => {
                    modalOverlay.style.opacity = '1';
                    modalContainer.style.transform = 'scale(1)';
                }, 10);
                
                // Close on escape key
                document.addEventListener('keydown', function closeOnEscape(e) {
                    if (e.key === 'Escape') {
                        modalOverlay.classList.add('opacity-0');
                        setTimeout(() => {
                            document.body.removeChild(modalOverlay);
                        }, 300);
                        document.removeEventListener('keydown', closeOnEscape);
                    }
                });
            }
        });
    });
}

// Team member effects for Team page
function initializeTeamMemberEffects() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        // Add hover effects
        member.addEventListener('mouseenter', () => {
            member.querySelector('.team-member-bio')?.classList.remove('opacity-0', 'translate-y-4');
            member.querySelector('.team-member-social')?.classList.remove('opacity-0');
            
            // Add neural effect on hover
            createTeamMemberNeuralEffect(member);
        });
        
        member.addEventListener('mouseleave', () => {
            member.querySelector('.team-member-bio')?.classList.add('opacity-0', 'translate-y-4');
            member.querySelector('.team-member-social')?.classList.add('opacity-0');
        });
        
        // Add click for modal bio (for mobile)
        member.addEventListener('click', (e) => {
            if (window.innerWidth < 768 && !e.target.closest('.team-member-social')) {
                const bio = member.querySelector('.team-member-bio');
                const socials = member.querySelector('.team-member-social');
                
                if (bio) {
                    bio.classList.toggle('opacity-0');
                    bio.classList.toggle('translate-y-4');
                }
                
                if (socials) {
                    socials.classList.toggle('opacity-0');
                }
            }
        });
    });
}

function createTeamMemberNeuralEffect(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 3; i++) {
        const neuron = document.createElement('div');
        neuron.classList.add('neural-particle');
        
        neuron.style.position = 'fixed';
        neuron.style.left = `${centerX}px`;
        neuron.style.top = `${centerY}px`;
        neuron.style.width = '2px';
        neuron.style.height = '2px';
        neuron.style.backgroundColor = getRandomColor();
        neuron.style.borderRadius = '50%';
        neuron.style.filter = 'blur(1px)';
        neuron.style.zIndex = '100';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 30 + 20;
        const speed = Math.random() * 0.5 + 0.5;
        
        neuron.style.transition = `all ${speed}s ease-out`;
        
        document.body.appendChild(neuron);
        
        setTimeout(() => {
            neuron.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            neuron.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            document.body.removeChild(neuron);
        }, speed * 1000);
    }
}

// Form validation for Contact page
function initializeFormValidation() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (input.required && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('border-red-500');
                    
                    const errorMessage = input.parentElement.querySelector('.error-message');
                    if (!errorMessage) {
                        const error = document.createElement('p');
                        error.className = 'text-red-500 text-xs mt-1 error-message';
                        error.textContent = 'This field is required';
                        input.parentElement.appendChild(error);
                    }
                } else {
                    input.classList.remove('border-red-500');
                    const errorMessage = input.parentElement.querySelector('.error-message');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                }
                
                // Email validation
                if (input.type === 'email' && input.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value)) {
                        isValid = false;
                        input.classList.add('border-red-500');
                        
                        const errorMessage = input.parentElement.querySelector('.error-message');
                        if (!errorMessage) {
                            const error = document.createElement('p');
                            error.className = 'text-red-500 text-xs mt-1 error-message';
                            error.textContent = 'Please enter a valid email address';
                            input.parentElement.appendChild(error);
                        }
                    }
                }
            });
            
            if (isValid) {
                // Simulate form submission
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    
                    setTimeout(() => {
                        submitButton.innerHTML = originalText;
                        submitButton.disabled = false;
                    }, 3000);
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg mt-4 flex items-center';
                    successMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Your message has been sent successfully!';
                    
                    contactForm.appendChild(successMessage);
                    
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 2000);
            }
        });
    }
}

// FAQ Accordions
function initializeFAQAccordions() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        if (question && answer && icon) {
            question.addEventListener('click', () => {
                // Toggle current FAQ
                answer.classList.toggle('hidden');
                
                // Toggle icon
                if (answer.classList.contains('hidden')) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                    item.classList.remove('active');
                } else {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                    item.classList.add('active');
                }
            });
        }
    });
}

// Map initialization for Contact page
function initializeMap() {
    const mapElement = document.getElementById('contactMap');
    
    if (mapElement) {
        // This is a placeholder for an actual map implementation
        // You would typically use a library like Leaflet or Google Maps here
        
        // Create a simple visual placeholder
        mapElement.style.background = 'linear-gradient(135deg, #1f2937 0%, #111827 100%)';
        mapElement.style.border = '1px solid rgba(0, 212, 255, 0.2)';
        mapElement.style.borderRadius = '0.75rem';
        mapElement.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.15)';
        mapElement.style.position = 'relative';
        mapElement.style.overflow = 'hidden';
        
        // Add some "map" elements
        for (let i = 0; i < 20; i++) {
            const road = document.createElement('div');
            road.style.position = 'absolute';
            road.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            
            if (Math.random() > 0.5) {
                // Horizontal road
                road.style.height = '1px';
                road.style.width = `${Math.random() * 40 + 10}%`;
                road.style.top = `${Math.random() * 100}%`;
                road.style.left = `${Math.random() * 60}%`;
            } else {
                // Vertical road
                road.style.width = '1px';
                road.style.height = `${Math.random() * 40 + 10}%`;
                road.style.left = `${Math.random() * 100}%`;
                road.style.top = `${Math.random() * 60}%`;
            }
            
            mapElement.appendChild(road);
        }
        
        // Add a marker for the location
        const marker = document.createElement('div');
        marker.style.position = 'absolute';
        marker.style.top = '50%';
        marker.style.left = '50%';
        marker.style.transform = 'translate(-50%, -50%)';
        marker.style.width = '20px';
        marker.style.height = '20px';
        marker.style.backgroundColor = 'rgba(0, 212, 255, 0.8)';
        marker.style.borderRadius = '50%';
        marker.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.6)';
        marker.style.animation = 'pulse 2s infinite';
        
        const pulse = document.createElement('style');
        pulse.textContent = `
            @keyframes pulse {
                0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                70% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
            }
        `;
        document.head.appendChild(pulse);
        
        mapElement.appendChild(marker);
        
        // Add text
        const label = document.createElement('div');
        label.style.position = 'absolute';
        label.style.bottom = '10px';
        label.style.left = '10px';
        label.style.color = 'rgba(255, 255, 255, 0.7)';
        label.style.fontSize = '12px';
        label.style.fontFamily = "'Space Grotesk', sans-serif";
        label.textContent = 'PRPCEM Campus, Amravati';
        
        mapElement.appendChild(label);
    }
}
