$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
        $('#hamlabel').fadeIn(200);    // Fade in the arrow
    } else {
        $('#hamlabel').fadeOut(200);   // Else fade out the arrow
    }
});