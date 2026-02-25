// Get all slides and navigation links
const slides = document.querySelectorAll('.slide');
const navLinks = document.querySelectorAll('.nav-link');
let currentSlide = 0;

// Function to show specific slide
function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active-slide'));
    
    // Remove active class from all nav links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to current slide
    slides[index].classList.add('active-slide');
    navLinks[index].classList.add('active');
    
    currentSlide = index;
}

// Function to go to next slide
function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

// Function to go to previous slide
function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

// Function to navigate to specific slide by ID
function navigateToSlide(slideId) {
    const slideIndex = Array.from(slides).findIndex(slide => slide.id === slideId);
    if (slideIndex !== -1) {
        showSlide(slideIndex);
    }
}

// Add click event listeners to navigation links
navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(index);
    });
});

// Handle form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

// Animate skill bars when skills section is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                bar.style.width = bar.style.width;
            });
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    observer.observe(skillsSection);
}
