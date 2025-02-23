export const initDropList = () => {
    const dropList = document.querySelector('.drop-list');

    dropList.addEventListener('click', () => {
        dropList.classList.toggle('active');
    });
};