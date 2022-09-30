$(function () {
  $(".header__article-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./images/prev-arrow.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./images/next-arrow.svg" alt=""></button>',
  });

  $(".production__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: ".production__nav",
  });
  $(".production__nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".production__slider",
    vertical: true,
    focusOnSelect: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./images/product-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./images/product-next.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
            arrows: false,
            centerMode: true,
            dots: true
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: false,
            arrows: false,
            centerMode: false,
            dots: true
          },
        },
      ]
    });

$('.toggle__button').on('click', function(){
  $('.menu__list').toggleClass('menu__list-active')
})

$('.toggle__button').on('click', function(){
  $('.header__bottom').toggleClass('header__bottom-active')
})
});
