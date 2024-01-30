
$(window).on('load resize', function() {
    if ($(window).width() < 400) {
      $('.bestsellers-block__body:not(.slick-initialized)').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    } else {
      $(".bestsellers-block__body.slick-initialized").slick("unslick");
    }
  });