jQuery(function(){
    $(function () {
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
    });
});