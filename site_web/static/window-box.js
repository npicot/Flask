jQuery(function(){
    $(function () {
        if ($(window).width() >= 300 && $(window).width() < 700) {
            $(".rbox3").insertAfter(".rbox6");
            $(".rbox12").insertAfter(".rbox13");
            $(".rbox5").insertAfter(".rbox7");
            $(".rbox8").insertAfter(".rbox4");
        }
    });
});