export const initDropList = () => {
    const dropList = document.querySelector('.nav__сategories-link');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');

    const updateHeaderStyle = () => {
        if (
            header.classList.contains('active') && 
            !nav.classList.contains('active') && 
            dropList.classList.contains('active')
        ) {
            header.style.paddingBottom = '70px';
        } else {
            header.style.paddingBottom = '';
        }
    };

    dropList.addEventListener('click', () => {
        dropList.classList.toggle('active');
        updateHeaderStyle();
    });

    const observer = new MutationObserver(updateHeaderStyle);

    observer.observe(header, {
        attributes: true,
        attributeFilter: ['class']
    });
    
    observer.observe(dropList, {
        attributes: true,
        attributeFilter: ['class']
    });

    updateHeaderStyle();
};