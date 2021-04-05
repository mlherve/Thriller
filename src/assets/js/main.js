//TIMER SECTION BUY
//Pass database values to s,m,h and the timer will start from there
var s = 35;
var m = 20;
var h = 10;
document.getElementById("hr").innerHTML = h;
document.getElementById("min").innerHTML = m;
document.getElementById("sec").innerHTML = s;

function pad(val) {
  return val > 9 ? val : "0" + val;
}
var seconds = setInterval(function () {
  document.getElementById("sec").innerHTML = pad(++s);
  if (s == 60) {
    document.getElementById("min").innerHTML = pad(++m);
    s = 0;
    if (m == 60) {
      document.getElementById("hr").innerHTML = pad(++h);
      m = 0;
    }
  }
}, 1000);
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    // Show backToTopButton
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

//BOUTON BACK TO TOP
backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});

// product Gallery and Zoom

// activation carousel plugin
var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
// change carousel item height
// gallery-top
let productCarouselTopWidth = $(".gallery-top").outerWidth();
$(".gallery-top").css("height", productCarouselTopWidth);

// gallery-thumbs
let productCarouselThumbsItemWith = $(
  ".gallery-thumbs .swiper-slide"
).outerWidth();
$(".gallery-thumbs").css("height", productCarouselThumbsItemWith);

// activation zoom plugin
var $easyzoom = $(".easyzoom").easyZoom();
