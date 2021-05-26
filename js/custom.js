$(function () {
    'use strict';
    // -----------------------
    $('.navber .nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut(2000);
    });

    // navbar js ends here

    $('.slick').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    // slick js ends here

    // important js starts here 

    var menuBg = $('#navbar');
    var btt = $('.btt');
    var html_body = $('html, body');

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 300) {
            btt.slideDown();
        } else {
            btt.slideUp();
        }
        if (scrolling > 200) {
            menuBg.addClass('stiky');
        } else {
            menuBg.removeClass('stiky');
        }
    });

    btt.on('click', function () {
        html_body.animate({
            scrollTop: 0,
        }, 2000);
    });

    //animation scroll js
    $('#navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
});