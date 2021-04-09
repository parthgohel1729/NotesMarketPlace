/* ===================================
            preloader
=================================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ===================================
            navigation
==================================== */

/* show & hide white navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide on window's scroll
        showHideNav();

    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // show white nav
            $("nav").addClass("white-nav-top");

            // show dark logo
            $(".navbar-brand img").attr("src", "images/home/logo.png");

        } else {

            // hide white nav
            $("nav").removeClass("white-nav-top");

            // show logo
            $(".navbar-brand img").attr("src", "images/home/top-logo.png");

        }

    }
});

/* smooth scrolling */
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        //get section id like #about, #services, #team etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/* show/hide password */
$(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

/* show alert message */
$("#signup-btn").click(function () {
    $("#alt-msg-02").show("fast");
});

$("#login-btn").click(function () {
    $("#alt-msg-01").show("fast");
});















