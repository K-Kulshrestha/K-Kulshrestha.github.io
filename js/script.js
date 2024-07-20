// Reset forms on page unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

// Particle effect
document.addEventListener('DOMContentLoaded', function() {
    const particleContainer = document.getElementById('particle-container');

    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 5; // Particle size between 5px and 15px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;

        particleContainer.appendChild(particle);
    }
});

// Toggle menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Initialize carousel
let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length > 0) {
        document.querySelector('.carousel-inner').style.transform = `translateX(0%)`;

        // Automatic slideshow
        let slideInterval = setInterval(() => {
            changeSlide(1);
        }, 3500);

        document.querySelector('.left').addEventListener('click', () => {
            changeSlide(-1);
            clearInterval(slideInterval); // Stop automatic slideshow on manual navigation
        });

        document.querySelector('.right').addEventListener('click', () => {
            changeSlide(1);
            clearInterval(slideInterval); // Stop automatic slideshow on manual navigation
        });
    }
});
