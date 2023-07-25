$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
        $('.dropbtn').fadeIn(200);    // Fade in the arrow
    } else {
        $('.dropbtn').fadeOut(200);   // Else fade out the arrow
    }
});