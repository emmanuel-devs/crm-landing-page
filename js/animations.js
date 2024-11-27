// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Observe scroll fade up elements
    document.querySelectorAll('.scroll-fade-up').forEach(el => observer.observe(el));
    
    // Observe scroll scale elements
    document.querySelectorAll('.scroll-scale').forEach(el => observer.observe(el));
    
    // Observe stagger children containers
    document.querySelectorAll('.stagger-children').forEach(el => observer.observe(el));
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});
