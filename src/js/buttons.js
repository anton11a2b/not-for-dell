let mainInfoReadMore = document.querySelector(".mainInfo__readMore");
let brandsSwiperReadMore = document.querySelector(".brands-swiper__readMore");
let acceptProductsSwiperReadMore = document.querySelector(".accept-products-swiper__readMore");

mainInfoReadMore.onclick = function () {
  let visibileText = document.getElementById("visibilText");
  mainInfoReadMore.classList.toggle("readMore_rotate");

  if (visibileText.classList.contains("mainInfo__text_hidden")) {
    visibilText.classList.remove("mainInfo__text_hidden");
    mainInfoReadMore.innerHTML = "Скрыть";
  } else {
    visibilText.classList.add("mainInfo__text_hidden");
    mainInfoReadMore.innerHTML = "Читать далее";
  }
}

brandsSwiperReadMore.onclick = function () {
  let brandsContainer = document.querySelector(".brands-wrapper");

  brandsSwiperReadMore.classList.toggle("readMore_rotate");
  brandsContainer.classList.toggle("brands-wrapper_height");

  if (brandsContainer.classList.contains("brands-wrapper_height")) {
    brandsSwiperReadMore.innerHTML = "Скрыть";
  } else {
    brandsSwiperReadMore.innerHTML = "Показать все";
  }
}

acceptProductsSwiperReadMore.onclick = function () {
  let brandsContainer = document.querySelector(".products-wrapper");

  acceptProductsSwiperReadMore.classList.toggle("readMore_rotate");
  brandsContainer.classList.toggle("products-wrapper_height");

  if (brandsContainer.classList.contains("products-wrapper_height")) {
    acceptProductsSwiperReadMore.innerHTML = "Скрыть";
  } else {
    acceptProductsSwiperReadMore.innerHTML = "Показать все";
  }
}

let burgerBtn = document.getElementById("burgerBtn");
let crossBtn = document.getElementById("crossBtn");

burgerBtn.onclick = function () {
  let mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.remove("mobileMenu_hidden");
}

crossBtn.onclick = function () {
  let mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("mobileMenu_hidden");
}
