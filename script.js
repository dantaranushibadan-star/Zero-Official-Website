// Navigation System
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Language Switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            const section = this.closest('section').id;
            
            // Remove active class from all language buttons in this section
            this.parentElement.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all language contents in this section
            const langContents = this.closest('section').querySelectorAll('.lang-content');
            langContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected language content
            document.getElementById(`${section}-${lang}`).classList.add('active');
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.style.display === 'block';
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // Toggle current answer
            answer.style.display = isActive ? 'none' : 'block';
        });
    });

    // Add sparkle effects to buttons on hover
    const cyberButtons = document.querySelectorAll('.cyber-button');
    
    cyberButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const sparkles = ['✨', '⚡', '🌟', '💫', '🔥'];
            const randomSparkle = sparkles[Math.floor(Math.random() * sparkles.length)];
            this.querySelector('.btn-sparkle').textContent = randomSparkle;
        });
    });

    // Auto-typing effect for subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 2000);
    }

    // Add particle effect to header
    createParticles();
});

// Particle Effect
function createParticles() {
    const header = document.querySelector('.cyber-header');
    if (!header) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#00f3ff';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.animation = `float ${5 + Math.random() * 10}s infinite linear`;
        header.style.position = 'relative';
        header.appendChild(particle);
    }
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c🔥 ZERO TOURNAMENTS - OFFICIAL WEBSITE 🔥', 'font-size: 20px; color: #00f3ff; font-weight: bold;');
console.log('%c🚀 DOMINATE CODM WITH OUR PREMIUM CHEATS!', 'font-size: 16px; color: #ff00ff;');
console.log('%c📞 Contact @shibbij on Telegram for purchases', 'font-size: 14px; color: #00ff87;');