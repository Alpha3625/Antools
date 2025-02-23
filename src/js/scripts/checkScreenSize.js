function initCheckScreenSize(burgerMenu, nav, overlay, body) {
    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth > 1024) {
            [burgerMenu, nav, overlay].forEach(item => {
                item.classList.add('no-transition');
                item.classList.remove('active');
                setTimeout(() => {
                    item.classList.remove('no-transition');
                }, 1000);
            });
            body.style.overflow = '';
        }
    });
}

export default initCheckScreenSize;