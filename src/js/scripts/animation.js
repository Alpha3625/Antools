function animation() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        setTimeout(() => {
            element.classList.add('active');
        }, 1000);
    });
}

export default animation;