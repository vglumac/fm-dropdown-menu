const screenSize = window.matchMedia("(min-width: 800px)");

const heroImg = document.querySelector('.hero__image img');
const navMenu = document.querySelector('.header__nav');
const navToggle = document.querySelector('.nav__toggle-button');
const subMenuToggles = document.querySelectorAll('.subMenuClosed');
const subMenus = document.querySelectorAll('.sub-menu');

function handleScreenSizeChange(screenSize) {
    if (screenSize.matches) {
        heroImg.src = './images/image-hero-desktop.png';
        navMenu.classList.remove('hidden');
        navToggle.classList.add('hidden');
    } else {
        heroImg.src = './images/image-hero-mobile.png';
        navToggle.classList.remove('hidden');
    }
}

function openMenu() {
    navMenu.classList.toggle('slideIn');
    navMenu.classList.toggle('drop-shadow');
    if(navMenu.classList.contains('slideIn')) {
        navToggle.querySelector('img').src = './images/icon-close-menu.svg';
        navToggle.style.position = 'fixed';
    } else {
        navToggle.querySelector('img').src = './images/icon-menu.svg';
        navToggle.style.position = 'absolute';
    }

}

function openSubMenu(index) {
    subMenuToggles[index].classList.toggle('subMenuOpened');
    subMenus[index].classList.toggle('hidden');
}

handleScreenSizeChange(screenSize);
screenSize.addEventListener('change', handleScreenSizeChange);
navToggle.addEventListener('click', openMenu);
subMenuToggles.forEach((subMenuToggle, index) => {
    subMenuToggle.addEventListener('click', e => {
        e.stopPropagation;
        openSubMenu(index);
    })
});

