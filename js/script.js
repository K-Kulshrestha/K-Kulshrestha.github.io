const cursor = new MouseFollower({
el: null,
container: document.body,
className: 'mf-cursor',
innerClassName: 'mf-cursor-inner',
textClassName: 'mf-cursor-text',
mediaClassName: 'mf-cursor-media',
mediaBoxClassName: 'mf-cursor-media-box',
iconSvgClassName: 'mf-svgsprite',
iconSvgNamePrefix: '-',
iconSvgSrc: '',
dataAttr: 'cursor',
hiddenState: '-hidden',
textState: '-text',
iconState: '-icon',
activeState: '-active',
mediaState: '-media',
stateDetection: {
    '-pointer': 'a,button',
    '-hidden': 'iframe'
},
visible: true,
visibleOnState: false,
speed: 0.1,
ease: 'expo.out',
overwrite: true,
skewing: 2,
skewingText: 2,
skewingIcon: 2,
skewingMedia: 2,
skewingDelta: 0.001,
skewingDeltaMax: 0.15,
stickDelta: 0.15,
showTimeout: 20,
hideOnLeave: true,
hideTimeout: 300,
hideMediaTimeout: 300
});    

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
    form.reset();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        carouselItems[currentSlide].classList.remove('active');
        currentSlide = (index + carouselItems.length) % carouselItems.length;
        carouselItems[currentSlide].classList.add('active');
    }
    
    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }
    
    // Function to start the automatic slideshow
    function startSlideShow() {
        slideInterval = setInterval(() => {
            changeSlide(1); // Change slide every 5 seconds (adjust as needed)
        }, 3000); // Adjust interval time as needed (currently set to 5 seconds)
    }
    
    // Function to stop the automatic slideshow
    function stopSlideShow() {
        clearInterval(slideInterval);
    }
    
    // Previous and Next button event listeners
    document.querySelector('.prev').addEventListener('click', () => {
        changeSlide(-1);
        stopSlideShow(); // Stop automatic slideshow on manual navigation
    });
    
    document.querySelector('.next').addEventListener('click', () => {
        changeSlide(1);
        stopSlideShow(); // Stop automatic slideshow on manual navigation
    });
    
    // Start the automatic slideshow initially
    startSlideShow();
    
    // Initially show the first slide
    showSlide(0);
});

document.addEventListener("DOMContentLoaded", function() {
    const particleContainer = document.getElementById('particle-container');

    for (let i = 0; i < 100; i++) { // Adjust number of particles as needed
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 5; // Particle size between 5px and 15px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        particle.style.top = `${Math.random() * 100}vh`; // Random vertical position
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`; // Random float duration

        particleContainer.appendChild(particle);
    }
});


function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const easter = document.getElementById('download-button');
    
    easter.addEventListener('click', (event) => {
        alert('I’m glad you\'re interested in learning more about me! Feel free to stay as long as you like and explore.');
    }); 
});