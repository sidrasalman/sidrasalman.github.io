$(document).ready(function(){
    $('.menu-icon').on("click", function(e){
        e.preventDefault();
        $('.top-nav-bar').toggleClass('nav-bar-active');
        $('body').toggleClass('overflow-hidden');   
    });

    $('.menu-close').on("click", function(e){
        e.preventDefault();
        $('.top-nav-bar').removeClass('nav-bar-active');
        $('body').removeClass('overflow-hidden');
    });

    $(".top-nav-bar li a").on("click", function() {
        if ($(".top-nav-bar").hasClass("nav-bar-active") ) {
            // $(".top-nav-bar").removeClass("nav-bar-active");
            $(".menu-close").trigger("click");
        }
    });
});
