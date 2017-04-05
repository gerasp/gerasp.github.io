/**
 * ===================================================================
 * main js
 *
 * -------------------------------------------------------------------
 */

(function ($) {

    "use strict";

    /*---------------------------------------------------- */
    /* Preloader
     ------------------------------------------------------ */
    $(window).load(function () {

        // will first fade out the loading animation
        $("#loader").fadeOut("slow", function () {

            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });

    });



    /*---------------------------------------------------- */
    /* Owl Carousel
     ------------------------------------------------------ */
    $("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom: [
            [0, 1],
            [700, 2],
            [960, 3]
        ],
        navigationText: false
    });



    /*---------------------------------------------------- */
    /* Smooth Scrolling
     ------------------------------------------------------ */
    $('a').on('click', function () {

        $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    	}, 500);
    	return false;
    });




})(jQuery);
