export const initHeader = () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('active', window.scrollY > 50);
    });
};