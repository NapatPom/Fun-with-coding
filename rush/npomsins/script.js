$(document).ready(function() {
    $(".nav-link").click(function(e) {
        let target = $(this).attr("href");

        if (target.startsWith("#")) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(target).offset().top
            }, 800);
        }
    });

    // Navbar Scroll Effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });

    // Custom Navbar Toggle
    $(".navbar-toggler").click(function() {
        $(".navbar-collapse").slideToggle();
    });
});
