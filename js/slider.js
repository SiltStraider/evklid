const container = document.querySelector(".slider__container")
const swiper = new Swiper('.slider__swiper', {
  speed: 300,
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    clickable: true
  }

})
