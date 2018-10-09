// document ready
$(function() {
    setTimeout(eyeMovement, 6000);
});

function eyeMovement() {
    $(document).mousemove(function(e){

        // eye info
        // var elem = document.getElementById('the_eye'); // hardcoded
        var elem = $("#the_eye"); // hardcoded
        var newX = e.pageX;
        var newY = e.pageY;

        // cover info
        var container = document.getElementById('the_cover');
        var container_top = getOffset(container).top;
        var container_left = getOffset(container).left;

        // if the position of the cursor is beyond the dimensions of the eye, limit movement to be within eye
        if ( newX < container_left ) {
            newX = container_left - 900; // leftmost edge
        } else if ( newX > container_left + 404 ) {
            newX = container_left - 450; // rightmost edge
        } else {
            newX = newX - container_left - 200; // offset
        }

        if ( newY < container_top ) {
            newY = container_top - 550; // topmost edge
        } else if ( newY > container_top + 600 ) {
            newY = container_top + 200; // bottommost edge
        } else {
            newY = newY - container_top - 300; // offset
        }

        // elem.style.left = newX + 'px';
        // elem.style.top = newY + 'px';
        elem.stop().animate({left: newX, top: newY}, 'fast');
    });
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
