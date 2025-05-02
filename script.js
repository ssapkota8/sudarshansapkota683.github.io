// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggleBtn.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fade-in Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const checkFade = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.8) {
            element.style.animation = 'fadeIn 1s forwards';
        }
    });
};

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
