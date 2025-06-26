function initCheckWindowSize(element) {
    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth > 1024) {
            element.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

export default initCheckWindowSize;
