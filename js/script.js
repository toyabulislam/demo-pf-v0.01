$ (document).ready (function(){
$ ('.slider').slick({
       arrows: false,
       dots: true,
       appendDots: '.slider-dots',
       dotsClass: 'dots',
});
let MenuBar = document.querySelector('.menu-bar');
let X = document.querySelector('.x');
let MobileNav = document.querySelector('.mobile-nav');


MenuBar.addEventListener('click', function(){
       MobileNav.classList.add('open');
});

X.addEventListener('click', function(){
       MobileNav.classList.remove('open');
})

 


});