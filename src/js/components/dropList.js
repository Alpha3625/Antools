export const initDropList = () => {
    const dropList = document.querySelector('.drop-list');

    dropList.addEventListener('click', function() {
        dropList.classList.toggle('active');
        console.log("hello")
    });
};