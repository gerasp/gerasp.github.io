
/*************************** CAROUSEL ************************/
var
    carousel = document.getElementsByClassName("carousel")[0],
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
        if (event.clientX > 50+startX) {
            nextImage();
            startX = event.clientX;
        } else if (event.clientX < startX-50) {
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
