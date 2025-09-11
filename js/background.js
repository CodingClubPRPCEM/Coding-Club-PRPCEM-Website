/* Background Animations for Coding Club PRPCEM Website */

document.addEventListener('DOMContentLoaded', function() {
    // Add animation keyframes
    addAnimationKeyframes();
    
    // Initialize animations
    initializeBackgroundEffects();
});

// Add keyframe animations
function addAnimationKeyframes() {
    const styleEl = document.createElement('style');
    styleEl.id = 'animation-keyframes';
    
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

// Initialize all background effects
function initializeBackgroundEffects() {
    const particleBg = document.getElementById('particleBg');
    if (!particleBg) return;
    
    // Clear any existing content
    particleBg.innerHTML = '';
    
    // Add starry background
    addStarryBackground(particleBg);
    
    // Add grid lines
    addGridLines(particleBg);
    
    // Add digital rain effect
    addDigitalRain(particleBg);
    
    // Add floating particles
    addFloatingParticles(particleBg);
}

// Add a starry background
function addStarryBackground(container) {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        
        // Random size for stars
        const size = Math.random() * 2 + 1;
        
        // Styling
        star.style.position = 'absolute';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.borderRadius = '50%';
        star.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        star.style.boxShadow = '0 0 4px rgba(255, 255, 255, 0.4)';
        star.style.zIndex = '-3';
        
        // Random positioning
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random blinking animation
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        star.style.animation = `blinkStar ${duration}s ${delay}s infinite ease-in-out`;
        
        container.appendChild(star);
    }
}

// Add a subtle grid overlay
function addGridLines(container) {
    const grid = document.createElement('div');
    grid.style.position = 'absolute';
    grid.style.inset = '0';
    grid.style.backgroundImage = 'linear-gradient(to right, rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px)';
    grid.style.backgroundSize = '40px 40px';
    grid.style.zIndex = '-2';
    container.appendChild(grid);
}

// Add digital rain effect
function addDigitalRain(container) {
    for (let i = 0; i < 20; i++) {
        const rain = document.createElement('div');
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
    const particles = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Styling
        const size = Math.random() * 4 + 2;
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.background = 'rgba(59, 130, 246, 0.5)';
        particle.style.boxShadow = '0 0 8px rgba(59, 130, 246, 0.7)';
        particle.style.zIndex = '0';
        
        // Positioning
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animation
        const duration = Math.random() * 20 + 20;
        const delay = Math.random() * 10;
        particle.style.animation = `floatAround ${duration}s ${delay}s infinite linear`;
        
        container.appendChild(particle);
        particles.push(particle);
    }
    
    // Create a few connections between particles
    setTimeout(() => {
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
