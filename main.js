const icon = document.querySelector(".icon");
const ul = document.querySelector("ul");
let click = 0;
icon.addEventListener("click", () => {
  icon.classList.toggle("fa-xmark");
  click++;
  if (click === 2) {
    ul.style.left = "0";
    click = 0;
  } else {
    ul.style.left = "-100%";
  }
});

// H1 ANIMATION

var typed = new Typed(".h1-text", {
  strings: [" SADAQ", "Developer", "Web Design"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// var swiper = new swiper(".info", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7000,
//     disableOnInteraction: false,
//   },
//   loop: true,
// });
