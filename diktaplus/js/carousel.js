
/*************************** CAROUSEL ************************/
var
    carousel = document.getElementsByClassName("carousel")[0],
    figure = document.getElementsByClassName("figure")[0],
    numImages = figure.childElementCount,
    theta =  2 * Math.PI / numImages,
    currentImage = 0
;

function nextImage () {
    currentImage--;
    figure.style.transform = 'rotateY('+(currentImage*theta)+'rad)';
}

function loop () {
    nextImage();
    setTimeout(function(){
        loop();
    }, 2000);
}

loop();