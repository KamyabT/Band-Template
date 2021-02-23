$('document').ready(function(){
    $('.mobileMenu').click(function(){
        $('.menuMainDesign').toggleClass('open');
        $('.mobileMenu').toggleClass('fa-times');
        $('.mobileMenu').toggleClass('fa-bars');
    });
});