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
                $(this).css("width", "120px");
                $(this).css("height", "120px");
                $(this).find("img").css("width", "65%");
                $(this).find("img").css("height", "65%");
            },
                function(){
                $(this).css("width", "100px");
                $(this).css("height", "100px");
                $(this).find("img").css("width", "60%");
                $(this).find("img").css("height", "60%");
            });
        }
    });
});