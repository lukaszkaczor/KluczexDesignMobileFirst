$(".buttonHolder").on("click", function () {
    $(".searchHolder").toggleClass("showMobileMenu");
    $(".mobileMenu").toggleClass("showMobileMenu");
    $(".mobileMenuBtn").toggleClass("mobileMenuBtnTransform");
    $(".navbar").toggleClass("positionAbsolute");
    // $(".navbar").css('position', 'absolute');
    $('.content').fadeToggle();
});