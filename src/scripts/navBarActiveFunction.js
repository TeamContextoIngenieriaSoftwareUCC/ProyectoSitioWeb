$ = (s) => document.querySelectorAll(s);

$('.nav-link').forEach(element => {
    element.addEventListener('click', () => {
        active = $('.active');
        if(active.length !== 0) active[0].classList.remove('active');
        element.classList.add('active');
    });
});