import initCheckWindowSize from "./checkWindowSize.js";

function mobileMenuToggle(burgerMenu, nav, overlay) {
    [burgerMenu, nav, overlay].forEach(item => item.classList.toggle('active'));

    if (burgerMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function navDropList () {
    const dropList = document.querySelector('.nav__сategories-link');
    
    if (dropList.classList.contains('active')) {
        dropList.classList.remove('active');
    }
}

navDropList();

export const initBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');

    burgerMenu.addEventListener('click', () => {
        mobileMenuToggle(burgerMenu, nav, overlay);
    });

    initCheckWindowSize(burgerMenu);
    initCheckWindowSize(nav);
    initCheckWindowSize(overlay);


    nav.addEventListener("click", (e) => {
        if (burgerMenu.classList.contains('active') && e.target.tagName === 'A') {
            mobileMenuToggle(burgerMenu, nav, overlay)
        }
    });
};


    // links.forEach(link => {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault(); // Отменяем переход по ссылке

    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);

    //         if (targetElement) {
    //             const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 70;

    //             window.scrollTo({
    //                 top: offsetPosition,
    //                 behavior: 'smooth',
    //             });
    //         }
    //     });
    // });