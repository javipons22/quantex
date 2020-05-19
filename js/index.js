jQuery(document).ready(function($){
    $('.main-nav, .social-nav').hide();
    $('.main-header__button').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.main-nav, .social-nav').slideToggle();
        //$('nav').slideToggle();
        //$('nav').animate({width:'toggle'},350);
    });
    //$('.fondo').css('height',10 + 'px');
});


// particlesJS.load('particles-js', './js/particles.json', function() {
//     console.log('callback - particles.js config loaded');
// });