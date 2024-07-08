// Cố định phần header khi cuộn xuống
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()){
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
    });
});