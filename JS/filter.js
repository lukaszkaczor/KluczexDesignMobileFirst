$(window).resize(function () {
    if ($(window).width() > 1200) {
        $('.card').fadeIn();
        $('.content').fadeIn();

        $(".searchHolder").removeClass("showMobileMenu");
        $(".mobileMenu").removeClass("showMobileMenu");
        $(".mobileMenuBtn").removeClass("mobileMenuBtnTransform");
    }
});

$('.filterIconHolder').on('click', function () {
    $('.card').fadeToggle();
    $('.filters').toggleClass('toggleFilters');

});
// $('.buttonHolder').on('click', function () {
//     $('.card').fadeToggle();
//         $(".searchHolder").toggleClass("showMobileMenu");
//     $(".mobileMenu").toggleClass("showMobileMenu");

// });