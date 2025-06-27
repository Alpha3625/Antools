function initCheckWindowSize(...elements) {
    const handleResize = () => {
        if (window.innerWidth > 1024) {
            elements.forEach(el => el.classList.remove('active'));
            document.body.style.overflow = '';
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
}

export default initCheckWindowSize;
