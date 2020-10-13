$(function () {
  $(".navbar-toggler").click(function () {
    $(".nav-item").css("margin-left", "auto")
    // $(".nav-item").css("float","right")

  });

  $('.regular').slick({
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 300,
    dots: false,
    // mobileFirst: true,
    prevArrow: '<img class="top-arrows left-arrow" src="assets/images/left.png" />',
    nextArrow: '<img class="top-arrows right-arrow" src="assets/images/right.png" />',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// ========================================================================================================

  
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow: '<img class="bottom-arrows left-arrow" src="assets/images/left.png" />',
    nextArrow: '<img class="bottom-arrows right-arrow" src="assets/images/right.png" />',
    responsive: [{
      // breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      // breakpoint: 600,
      settings: {
        display: "none",
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,

      }
    },
]
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        display: "none",
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
        // prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-left fa-2x"></i></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right fa-2x"></i></button>',
      }
    },
    {
      breakpoint: 480,
      settings: {
        // prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-left fa-1x"></i></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right fa-1x"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 4,
        infinite: true,
        dots: false
      }
    }]
  });


})