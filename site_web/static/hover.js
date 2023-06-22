jQuery(function(){
    $(function () {
        if ($(window).width() >= 1100) {
                $(".circle").hover(function () {
                $(this).css("width", "90px");
                $(this).css("height", "90px");
                $(this).find("img").css("width", "65%");
                $(this).find("img").css("height", "65%");
            },
                function(){
                $(this).css("width", "80px");
                $(this).css("height", "80px");
                $(this).find("img").css("width", "65%");
                $(this).find("img").css("height", "65%");
            });

            $(".circle2").hover(function () {
                $(this).css("width", "90px");
                $(this).css("height", "90px");
                $(this).find("img").css("width", "60%");
                $(this).find("img").css("height", "60%");
            },
                function(){
                $(this).css("width", "75px");
                $(this).css("height", "75px");
                $(this).find("img").css("width", "50%");
                $(this).find("img").css("height", "50%");
            });
        }
    });
});