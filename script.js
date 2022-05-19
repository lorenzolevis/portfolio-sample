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

