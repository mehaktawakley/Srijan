$(window).on('load', function() {
  $('#preloader').delay(350).fadeOut('slow');
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

$(function () {

  $(window).scroll(function(){
    if( $(window).scrollTop() > 100 ) {

      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/1.png")

    } else {

      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/2.png")

    }
  });
})

$(function () {

  $(window).scroll(function(){
    if( $(window).scrollTop() > 2200 ) {

      $("#team-members").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
      });
    }
  });
});

$(function () {

  $('#slider-work').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

$(function () {

  $('#works-tabs').responsiveTabs({
      animation: 'slide'
  });

});

$(document).ready(function(){

  $("#thover").click(function(){
		$(this).fadeOut();
    $("#tpopup").fadeOut();
	});


  $("#tclose").click(function(){
		$("#thover").fadeOut();
    $("#tpopup").fadeOut();
	});

});

$(function () {
  $("#mobile-nav-open-btn").click(function() {
    $("#mobile-nav").css("height", "100%");
  });

  $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
    $("#mobile-nav").css("height", "0%");
  });
});
