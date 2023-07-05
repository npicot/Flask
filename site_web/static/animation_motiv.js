$(document).ready(function () {
    if ($(window).width() >= 1100) {
        for (let index = 0; index < 2; index++) {
            $("#fr-en").animate({
                width: "30px",
                height: "30px"
            });
            $("#fr-en").animate({
                width: "60px",
                height: "60px"
            });
        }
    }
    if ($(window).width() >= 700 && $(window).width() < 1100) {
        for (let index = 0; index < 2; index++) {
            $("#fr-en").animate({
                width: "20px",
                height: "20px"
            });
            $("#fr-en").animate({
                width: "40px",
                height: "40px"
            });
        }
    }
    if ($(window).width() >= 300 && $(window).width() < 700) {
        for (let index = 0; index < 2; index++) {
            $("#fr-en").animate({
                width: "15px",
                height: "15px"
            });
            $("#fr-en").animate({
                width: "30px",
                height: "30px"
            });
        }
    }
});