const screenSize = window.matchMedia("(min-width: 800px)");

const heroImg = document.querySelector('.hero__image img');
const navMenu = document.querySelector('.header__nav');
const navToggle = document.querySelector('.nav__toggle-button');

function handleScreenSizeChange(screenSize) {
    if (screenSize.matches) {
        heroImg.src = './images/image-hero-desktop.png';
        navMenu.classList.remove('hidden');
        navToggle.classList.add('hidden');
    } else {
        heroImg.src = './images/image-hero-mobile.png';
        navMenu.classList.add('hidden');
        navToggle.classList.remove('hidden');
    }
}

function openMenu() {
    navMenu.classList.toggle('slideIn');
}

handleScreenSizeChange(screenSize);
screenSize.addEventListener('change', handleScreenSizeChange);
navToggle.addEventListener('click', openMenu);

