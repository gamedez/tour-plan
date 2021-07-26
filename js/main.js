$(document).ready(function (){
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

var menuButton = $(".menu-button");
menuButton.on("click", function () {
  document
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
});

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}
// обработка формы
$(".form").each(function () {
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must be more than 2 characters long"
    },
    email: {
      required: "We need your email address to contact",
      email: "The mail format should be 1@domain.ru"
    },
    phone: {
      required: "The phone number is required to fill",
    },
  }
});
});
$(function() {
   $('.phone').mask('+7 (000) 000-00-00');
 });
 // обработка формы подписки на рассылку
$(".error").each(function () {
  $(this).validate({
  errorClass: "error",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must be more than 2 characters long"
    },
    email: {
      required: "We need your email address to contact",
      email: "The mail format should be 1@domain.ru"
    },
    phone: {
      required: "The phone number is required to fill",
    },
  }
});
});
});
