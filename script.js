let menuTrigger = document.querySelector('.menu-trigger');
menuTrigger.addEventListener('click', function() {
    document.body.classList.toggle('menu-open')
});

window.addEventListener('scroll', function() {

    if (window.scrollY > 300) {
        document.body.classList.add('scrolled-down');
    } else {
        document.body.classList.remove('scrolled-down');
    }
});

ScrollReveal().reveal('.reveal', { 
    delay: 500,
    distance: '80px',
    duration: 1500,
    easing: 'cubic-bezier(.215, .61, .355, 1)',
    interval: 500
});

ScrollReveal().reveal('.reveal--zoom', { 
    delay: 500,
    duration: 1500,
    easing: 'cubic-bezier(.215, .61, .355, 1)',
    interval: 200,
    scale: 0.5,
    mobile: false
});