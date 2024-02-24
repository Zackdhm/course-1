document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.home-content h1');
    const middleLine = document.querySelector('.middle-line');
    const button = document.querySelector('.home-content button');

    gsap.to(title, { autoAlpha: 1, y: 0, delay: 0.2 });
    gsap.to(middleLine, { height: 200 }, '-=0.2');
    gsap.to(button, { autoAlpha: 1, y: 0 }, '-=0.2');
});
