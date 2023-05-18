var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
let openBtn = document.getElementById("hamburger");
let resBox = document.querySelector(".responsive-box");
let closeBtn = document.getElementById("close-btn");
openBtn.addEventListener("click", () => {
  resBox.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  resBox.style.display = "none";
});
let playBtn=document.getElementsByClassName("videoBtn");
let playVideo = document.getElementsByClassName("reviewVideo");
function myFunction(id) {
  if (playVideo[id].paused) {
    playBtn[id].setAttribute("src", "./image/reviews/icon-play.svg");
    playVideo[id].play();
  } else {
    playBtn[id].setAttribute("src", "./image/reviews/icon-pause.svg");
    playVideo[id].pause();
  }
}
let body = document.body;
toogle.addEventListener("click", () => {
  body.classList.toggle("body-dark");
});




const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView:4,
  spaceBetween:36,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween:15
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 26
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 36
    }
  }
});