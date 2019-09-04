// show header bg on scroll
$(function() {
    // h = wiewport height
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $(window).on("scroll", function() {
        if($(window).scrollTop() > (h/10)) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in css)
           $(".header").removeClass("active");
        }
    });
});

