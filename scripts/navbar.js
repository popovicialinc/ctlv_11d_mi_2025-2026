const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-linkuri');
    const navLinks = document.querySelectorAll('.nav-linkuri li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link) => {
        link.style.animation = "navLinkFade 0.5s ease forwards ${index / 7}s";
    });
}

navSlide();