import './sass/styles.scss';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome'
// import waypoint  from 'jquery-waypoints/waypoints';

$(document).ready(function() {

	/***************** Waypoints ******************/

    // $('.wp1').waypoint(function(){
    //     $('.wp1').addClass('animated fadeInUp');
    // }, {
    //     offset: '75%'
    // });

	// $('.wp2').waypoint(function() {
	// 	$('.wp2').addClass('animated fadeInUp');
	// }, {
	// 	offset: '75%'
	// });

    // $('.wp3').waypoint(function() {
	// 	$('.wp3').addClass('animated fadeInRight');
	// }, {
	// 	offset: '75%'
	// });

	/***************** Initiate Flexslider ******************/
	// $('.flexslider').flexslider({
	// 	animation: "slide"
	// });

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