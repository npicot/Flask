$(document).ready(function () {
    $("#fr-en").click(function () {
        if ($(":lang(en)").hasClass("hide")) {
            $(":lang(fr)").addClass("hide");
            $(":lang(en)").removeClass("hide");
        }
        else {
            $(":lang(en)").addClass("hide");
            $(":lang(fr)").removeClass("hide");
        }
    });
});