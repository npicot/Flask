$(document).ready(function () {
    var $positon_aboutme = $("#aboutme_img").position(),
        $positon_resume = $("#resume_img").position(), 
        $positon_works = $("#works_img").position(),
        $positon_contact = $("#contact_img").position(),
        $positon_motiv = $("#motiv_img").position()

    $("#aboutme_img, #resume_img, #works_img, #contact_img, #motiv_img").css({
        position: "absolute",
        "left": -200,
    });
    $("#aboutme_img, #aboutme_img2").animate({
        "left": $positon_aboutme.left
    }, 1500, function () {
        $(this).css({
           position: "static" 
        });
    });
    $("#resume_img, #resume_img2").animate({
        "left": $positon_resume.left
    }, 1500, function () {
        $(this).css({
           position: "static" 
        });
    });
    $("#works_img, #works_img2").animate({
        "left": $positon_works.left
    }, 1500, function () {
        $(this).css({
           position: "static" 
        });
    });
    $("#contact_img, #contact_img2").animate({
        "left": $positon_contact.left
    }, 1500, function () {
        $(this).css({
           position: "static" 
        });
    });
    $("#motiv_img, #motiv_img2").animate({
        "left": $positon_motiv.left
    }, 1500, function () {
        $(this).css({
           position: "static" 
        });

        for (let index = 0; index < 1; index++) {
            $("#fr-en").animate({
                width: "40px",
                height: "40px"
            });
            $("#fr-en").animate({
                width: "80px",
                height: "80px"
            });
        }
    });
});