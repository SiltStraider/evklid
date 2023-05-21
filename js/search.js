document.querySelector(".search").addEventListener("click", function() {
  document.querySelector(".search-form").classList.add("search-form__active");
  this.classList.add("active");
})
document.querySelector(".search-form__btn-cross").addEventListener("click", function() {
  document.querySelector(".search-form").classList.remove("search-form__active");
})

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".search-form");
  if (!target.closest(".form-container")) {
    form.classList.remove("search-form__active");
    form.querySelector("input").value = "";
    document.querySelector(".search").classList.remove("active")
  }
})

var btn = document.querySelector('.search');
var blockHidden = document.querySelector('.search-form');
var cross = document.querySelector('.search-form__btn-cross')

function showBlock() {

  blockHidden.classList.add('search-form__active');
  btn.addEventListener('click', showBlock);
}


