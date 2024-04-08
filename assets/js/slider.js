$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // asNavFor: '.slider-for',
    // dots: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1024, // large screen size
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991, // medium screen size
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768, // medium screen size
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
});

$('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});