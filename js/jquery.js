$(document).ready(function () {
  // Responsive header
  $('.header-3 .d-flex .icon').click(function () {
    $('.header-3 .slide-down').css("top", "0");
  });
  $('.header-3 .slide-down .close').click(function () {
    $('.header-3 .slide-down').css({ "top": "-200%" });
  });

  // section-3
  $('.filter li').click(function () {
    $('.filter li').css({ 'color': '#1C3F3A', 'font-weight': '400' });
    $(this).css({ 'color': '#1C3F3A', 'font-weight': '700' });
  });

  var $btns = $('.show').click(function () {
    if (this.id == '.a') {
      $('#content-box > div').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('#content-box .content').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
  });

  // section-4
  $(".logo-pannel").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: false,
    arrows: false,
    infinite: true,
  });

  // section-5
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: false,
    arrows: true,
    infinite: true,
  });

  // section-6

  $(".custom-accordian .text").hide();
  $(".custom-accordian .btn-6").find(".icon-2").css("display", "none");
  $(".custom-accordian .btn-6").click(function () {
    $(".text").hide();
    $(this).next(".text").slideToggle();
    $(".custom-accordian .btn-6 a").css("color", "black");
    $($(this).find(".icon")).hide();
    $(".custom-accordian .btn-6").find(".icon-2").css("display", "none");
    $(".custom-accordian .btn-6").find(".icon").css("display", "block");
    $(this).find(".icon").css("display", "none");
    $($(this).find(".icon-2")).show().css("color", "#1C3F3A");


  });

  // section-8

  $(".blog-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  AOS.init();
  
});