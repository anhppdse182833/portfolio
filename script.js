document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navbar = document.getElementById('navbar');

    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // 2. Lightbox Modal Functionality (Extra 2)
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementById('closeModal');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            captionText.textContent = img.alt;
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    });

    // 3. Testimonial Carousel Functionality (Extra 3)
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
});
