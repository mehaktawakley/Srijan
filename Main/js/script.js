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
