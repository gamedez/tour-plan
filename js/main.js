var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    KeyboardOptions: 'true',
  },
});
var reviewsSlider = new Swiper('.reviews-slider', {
  autoHeight: true,
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("click po knopke menu")
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});