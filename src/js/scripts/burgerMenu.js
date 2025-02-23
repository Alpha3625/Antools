import initCheckScreenSize from "./checkScreenSize.js";

export const initBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    if (burgerMenu && nav && overlay) {
        burgerMenu.addEventListener('click', () => {
            [burgerMenu, nav, overlay].forEach(item => item.classList.toggle('active'));

            if (burgerMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        initCheckScreenSize(burgerMenu, nav, overlay, body);
    } else {
        console.warn("One of the elements wasn't found!");
    }
};