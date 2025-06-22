// Tab switching functionality
function switchTab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Add click event listeners to tab buttons
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        switchTab(tabName);
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navTabs = document.querySelector('.nav-tabs');

navToggle.addEventListener('click', () => {
    navTabs.classList.toggle('active');
});

// Script executor functionality
function copyScript() {
    const scriptInput = document.getElementById('scriptInput');
    const defaultScript = "loadstring(game:HttpGet('https://raw.githubusercontent.com/alexchad/hub/main/loader.lua'))()";
    
    // If input is empty, use default script
    const textToCopy = scriptInput.value || defaultScript;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Show success feedback
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ Copied!';
        copyBtn.style.background = 'rgba(0, 255, 0, 0.3)';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy to clipboard');
    });
}

function executeScript() {
    const scriptInput = document.getElementById('scriptInput');
    const script = scriptInput.value.trim();
    
    if (!script) {
        alert('Please enter a script to execute');
        return;
    }
    
    // Simulate script execution (in real implementation, this would interface with the executor)
    alert('Script execution simulated! In a real implementation, this would send the script to your executor.');
}

function clearScript() {
    const scriptInput = document.getElementById('scriptInput');
    scriptInput.value = '';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add floating animation to hero cards
document.addEventListener('DOMContentLoaded', () => {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Add random delay and duration for more natural movement
        const delay = Math.random() * 2;
        const duration = 4 + Math.random() * 4;
        
        card.style.animationDelay = `${delay}s`;
        card.style.animationDuration = `${duration}s`;
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add intersection observer for animations
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
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .game-card, .step-card, .faq-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add particle effect to background (optional enhancement)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    
    // Random starting position
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(particle);
    
    // Animate particle
    const animation = particle.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'linear'
    });
    
    animation.onfinish = () => {
        particle.remove();
    };
}

// Create particles periodically
setInterval(createParticle, 300);

// Initialize default script in executor
document.addEventListener('DOMContentLoaded', () => {
    const scriptInput = document.getElementById('scriptInput');
    if (scriptInput) {
        scriptInput.placeholder = "loadstring(game:HttpGet('https://raw.githubusercontent.com/alexchad/hub/main/loader.lua'))()";
    }
});
