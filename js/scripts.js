$(document).ready(function() {


    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
    })

    /* When user clicks a link */

    /***************** Header BG Scroll ******************/

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll >= 200){
            $('section.navigation').addClass('fixed');
            $('header').css({
                "border-bottom": "none",
                "padding": "35px 0"
            });
            $('header .member-actions').css({
                "top": "26px",
            });
            $('header .navicon').css({
                "top": "34px",
            });
        } else {
            $('section.navigation').removeClass('fixed');
            $('header').css({
                "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                "padding": "50px 0"
            });
            $('header .member-actions').css({
                "top": "41px",
            });
            $('header .navicon').css({
                "top": "48px",
            });
        }
    })
})