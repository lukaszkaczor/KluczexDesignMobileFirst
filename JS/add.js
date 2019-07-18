$('.dwa').hover(
    function () {
        // $(this).css('right', '-.5rem');
        $(this).css("width", "30%");
    },
    function () {
        // $(this).css('right', '-.5rem');
        $(this).css("width", "15%");
    }
);

$(document).ready(function () {
    if ($(window).width() > 1200) {
        $(".add").css("width", $(".bestseller").height());
        $(".add").css("height", $(".dwa").width() + "px");
        $(".add").css("line-height", $(".dwa").width() + "px");
    }

});


$(window).resize(function () {
    if ($(window).width() > 1200) {
        $(".add").css("width", $(".bestseller").height());
        $(".add").css("height", $(".dwa").width() + "px");
        $(".add").css("line-height", $(".dwa").width() + "px");

    }
});