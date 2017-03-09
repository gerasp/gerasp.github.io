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

            $(".goog-te-gadget-icon").replaceWith("<i class='fa fa-language' style='margin-right: 8px; font-size: 1.3em'></i>");
            $(".goog-te-banner-frame").replaceWith("");
        });

    })


    /*---------------------------------------------------- */
    /* FitText Settings
     ------------------------------------------------------ */
    setTimeout(function () {

        $('#intro h1').fitText(1, {minFontSize: '65px', maxFontSize: '130px'});

    }, 100);


    /*---------------------------------------------------- */
    /* FitVids
     ------------------------------------------------------ */
    $(".fluid-video-wrapper").fitVids();


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


    /*----------------------------------------------------- */
    /* Alert Boxes
     ------------------------------------------------------- */
    $('.alert-box').on('click', '.close', function () {
        $(this).parent().fadeOut(500);
    });


    /*---------------------------------------------------- */
    /*	Masonry
     ------------------------------------------------------ */
    var containerProjects = $('#folio-wrapper');

    containerProjects.imagesLoaded(function () {

        containerProjects.masonry({
            itemSelector: '.folio-item',
            resize: true
        });

    });


    /*----------------------------------------------------*/
    /*	Modal Popup
     ------------------------------------------------------*/
    $('.item-wrap a').magnificPopup({

        type: 'inline',
        fixedContentPos: false,
        removalDelay: 300,
        showCloseBtn: false,
        mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    /*---------------------------------------------------- */
    /* Smooth Scrolling
     ------------------------------------------------------ */
    $('.smoothscroll').on('click', function (e) {

        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });

    });


    /*---------------------------------------------------- */
    /*  Placeholder Plugin Settings
     ------------------------------------------------------ */
    $('input, textarea, select').placeholder()


})(jQuery);