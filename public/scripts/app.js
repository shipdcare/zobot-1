$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $("#nav").addClass("custom-nav");
            $(".nav-a").css("color", "black");
            $(".navbar-brand").css({ "height": "74px", "margin-top": "0" });
            $("#brand-logo").attr("src", "./images/logo-dark.png");
            $('.trial-btn').css({ "color": "black", "border-color": "black" });
        } else {
            $("#nav").removeClass("custom-nav");
            $(".nav-a").css("color", "white");
            $(".navbar-brand").css({ "height": "85px" });
            $("#brand-logo").attr("src", "./images/logo-light.svg");
            $('.trial-btn').css({ "color": "white", "border-color": "white" });
        }
    });
});