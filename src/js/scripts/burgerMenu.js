import initCheckWindowSize from "./checkWindowSize.js";

const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const burgerMenu = document.querySelector('.burger-menu');
const dropList = document.querySelector('.nav__сategories-link');

function mobileMenuToggle(burgerMenu, nav, dropList, overlay) {
    const isActive = burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    dropList.classList.remove('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
}

export const initBurgerMenu = () => {
    if (!burgerMenu || !nav || !overlay) return;

    burgerMenu.addEventListener('click', () => {
        mobileMenuToggle(burgerMenu, nav, dropList, overlay);
    });

    nav.addEventListener('click', (e) => {
        if (burgerMenu.classList.contains('active') && e.target.tagName === 'A') {
            mobileMenuToggle(burgerMenu, nav, dropList, overlay);
        }
    });

    initCheckWindowSize(burgerMenu, nav, overlay, dropList);
};