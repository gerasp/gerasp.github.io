
/*************************** APPEAR EFFECTS ************************/
$('[data-toggle="tooltip"]').tooltip();


/*************************** TYPE EFFECT ************************/
// var containerId = "#demo";
// var container = $(containerId);
//
// var letterIndex = 0;
// var textIndex = 0;
// var texts = ['Lorem ipsum typing effect!', 'text2', 'This is another text'];
//
// var typeSpeed = 50;
// var untypeSpeed = 50;
// var caretSpeed = 500;
// var stopTime = 1000;
// var startTime = 500;
//
// function typeText() {
//     if (letterIndex < texts[textIndex].length) {
//         container.append(texts[textIndex].charAt(letterIndex));
//         letterIndex++;
//         setTimeout(typeText, typeSpeed);
//     } else {
//         letterIndex = 0;
//         textIndex++;
//         if (textIndex >= texts.length) textIndex = 0;
//         setTimeout(untypeText, stopTime);
//     }
// }
//
// function untypeText() {
//     var text = document.getElementById(containerId.substring(1));
//     if (text.innerText.length > 0) {
//         text.innerText = text.innerText.substring(0,text.innerText.length-1);
//         setTimeout(untypeText, untypeSpeed);
//     } else setTimeout(typeText, startTime);
// }
//
// setInterval(function() {
//     container.toggleClass('show-caret');
// }, caretSpeed);




/*************************** FULL PAGE SCROLL ************************/

var ticking = false;
var scrollSensitivitySetting = 5;
var slideDurationSetting = 500;
var totalSlideNumber = $("section").length;
var currentSlideNumber = Math.trunc($(window).scrollTop() / $(window).height());

function nextSlide() {
    if (currentSlideNumber < totalSlideNumber - 1) {
        currentSlideNumber++;
        $('html, body').animate({scrollTop: ($("section").eq(currentSlideNumber).offset().top)}, slideDurationSetting);
    }
    slideDurationTimeout();
}

function previousSlide() {
    if (currentSlideNumber > 0) {
        currentSlideNumber--;
        $('html, body').animate({scrollTop: ($("section").eq(currentSlideNumber).offset().top)}, slideDurationSetting);
    }
    slideDurationTimeout();
}

function fullPageScroll(event) {
    delta = event.wheelDelta;
    if (ticking !== true) {
        if (delta <= -scrollSensitivitySetting) nextSlide();
        if (delta >= scrollSensitivitySetting) previousSlide();
    }
}

function keyHandler(event) {
    if (event.which === 40) nextSlide();
    if (event.which === 38) previousSlide();
}

function slideDurationTimeout() {
    ticking = true;
    setTimeout(function() {
        ticking = false;
    }, slideDurationSetting);
}

window.addEventListener("mousewheel", fullPageScroll);
window.addEventListener("keydown", keyHandler);

/*************************** PHONE ************************/
var phone = $(".phone");
var windowHeight = $(window).height();

function skrollrInit() {
    // 1st section
    phone.attr("data-0", "bottom: -200px");

    // 2nd section
    phone.attr("data-"+windowHeight, "bottom:"+Math.trunc(windowHeight * 0.5 - phone.height() * 0.5)+"px; transform:rotate3d(0,0,0,0deg);");

    // 3rd section
    phone.attr("data-"+windowHeight*2, "transform:rotate3d(0,0,1,90deg); left: 0px;");

    // 4th section
    phone.attr("data-"+windowHeight*3, "transform:rotate3d(0,1,0,0deg)");


    // 5th section
    // phone1.attr("data-"+windowHeight*4, "transform: rotateY(45deg);");
    // phone2.attr("data-"+windowHeight*4, "transform: rotateY(0deg);");
    // phone3.attr("data-"+windowHeight*4, "transform: rotateY(-45deg);");

    skrollr.init();
}

skrollrInit();



/*************************** CAROUSEL ************************/
var
    carousel = document.getElementsByClassName("screenshot-carousel")[0],
    figure = document.getElementsByClassName("figure")[0],
    numImages = figure.childElementCount,
    theta =  2 * Math.PI / numImages,
    currentImage = 0
;

function previousImage () {
    currentImage--;
    figure.style.transform = 'rotateY('+(currentImage*theta)+'rad)';
}

function nextImage () {
    currentImage++;
    figure.style.transform = 'rotateY('+(currentImage*theta)+'rad)';
}

document.getElementsByClassName("carousel-control-prev-icon")[0].addEventListener("click", previousImage);
document.getElementsByClassName("carousel-control-next-icon")[0].addEventListener("click", nextImage);

/*************************** CAROUSEL->DRAGGING ************************/

var dragging = false;
var startX = 0;

function startMove(event) {
    event.preventDefault();
    dragging = true;
    startX = event.clientX;
}

function move(event) {
    event.preventDefault();
    if (dragging) {
        if (event.clientX > 150+startX) {
            nextImage();
            startX = event.clientX;
        } else if (event.clientX < startX-150) {
            previousImage();
            startX = event.clientX;
        } else {
            figure.style.transform = 'rotateY('+(currentImage*theta)+'rad)';
        }
    }
}

function endMove(event) {
    event.preventDefault();
    dragging = false;
}


carousel.addEventListener("mousedown",startMove);
carousel.addEventListener("mousemove",move);
carousel.addEventListener("mouseup",endMove);

carousel.addEventListener("touchstart",startMove);
carousel.addEventListener("touchmove",move);
carousel.addEventListener("touchend",endMove);



/*************************** LOADER ************************/

$(document).ready(function () {
    // $( "html, body" ).scrollTop( 0 );
    $(".loader").fadeOut();
    $(".loader-container").fadeOut();
    // setTimeout(typeText, 100);

});

