
window.onload = function() {

    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
}

function scrollFunc(e) {
    var scrollTop = document.documentElement.scrollTop;

   
}

function stageResize() {
    
}

function loop() {
  
    window.requestAnimationFrame(loop);
}


function mouseMove (e) {

}
