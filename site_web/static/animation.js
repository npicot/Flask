$(document).ready(function () {
    var $positon_aboutme = $("#aboutme_img").position(),
        $positon_resume = $("#resume_img").position(), 
        $positon_works = $("#works_img").position(),
        $positon_contact = $("#contact_img").position(),
        $positon_motiv = $("#motiv_img").position()

    $("#aboutme_img").animate({
        "position": "absolute",
        "left": "-=200",
        "left": "+=500"
    }, function () {
        $("#resume_img").animate({
            "left": "+=720px"
        });
    });
            
    $("#works_img").animate({
        "right": "+=520px"
    }, function () {
        $("#contact_img").animate({
            "right": "+=720px"
        }, function () {
            $("#motiv_img").animate({
                "right": "+=920px"
            });
        });
    });/**/
});