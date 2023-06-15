jQuery(function(){
    $(function () {
        $("#fr-en").click(function() {
            $(this).css("width", "200px");
            $(".a").insertAfter(".c");
        });
    });
});