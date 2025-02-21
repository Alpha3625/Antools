export const initBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');

    if (burgerMenu && nav && overlay) {
        burgerMenu.addEventListener('click', () => {
            [burgerMenu, nav, overlay].forEach(item => item.classList.toggle('active'));
        });
        // body.style.overflow = 'hidden';
    } else {
        console.warn("One of the elements wasn't found!");
    }
};