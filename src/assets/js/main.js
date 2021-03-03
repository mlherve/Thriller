$(document).ready(function () {
  // Menu burger
  function parrentToggleActive(e, element) {
    e.preventDefault();
    e.stopPropagation();
    element.stop().parent().toggleClass("burger--cross");
  }

  // Afficher / masquer menu full screen
  $(".burger").on("click", ".burger__button", function (e) {
    parrentToggleActive(e, $(this));
    $(".menu").toggleClass("menu__overlay--active");
  });

  // Afficher / masquer menu full screen au clic d'un lien
  $(".menuVertical__nav .nav__anchor").click(function () {
    $(".burger").removeClass("burger--cross");
    $(".menu").removeClass("menu__overlay--active");
  });

  // Apparition des éléments au scroll
  var sr = ScrollReveal();

  sr.reveal(".title", {
    delay: 300,
    origin: "right",
    distance: "300px",
  });
  sr.reveal(".skill", {
    interval: 300,
  });
  sr.reveal(".contact__image", {
    delay: 300,
    scale: 0.85,
  });
  sr.reveal(".contact__form", {
    delay: 300,
    origin: "left",
    distance: "300px",
  });

  // Carrousel infini logos compétences
  $(".skills__technos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 750,
    arrows: !1,
    dots: !1,
    pauseOnHover: !0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // Galerie des réalisations
  $(".gallery").isotope({
    itemSelector: ".gallery__item",
    layoutMode: "fitRows",
  });

  $(".productions__item").click(function () {
    $(".productions__item").removeClass("productions__item--active");
    $(this).addClass("productions__item--active");

    var selector = $(this).attr("data-filter");
    $(".gallery").isotope({
      filter: selector,
    });
  });

  // Infos projets
  var nbProductions = $(".gallery").children().length;

  for (var i = 1; i <= nbProductions; i++) {
    $(".gallery__open-" + i).click(function () {
      var itemProduction = $(this).parent().next();
      itemProduction.addClass("work--active");
    });
  }

  $(".work__item--close").click(function () {
    $(".work--close").removeClass("work--active");
  });

  // Diminuer la taille de police
  $(".moins").click(function (e) {
    var taillePolice = $("html").css("font-size");
    taillePolice = parseInt(taillePolice);
    if (taillePolice >= 14) {
      taillePolice = taillePolice - 2;
      $("html").css("font-size", taillePolice + "px");
    } else {
      alert("Vous avez atteint la taille minimale.");
    }
  });

  // Augmenter la taille de police
  $(".plus").click(function (e) {
    var taillePolice = $("html").css("font-size");
    taillePolice = parseInt(taillePolice);
    if (taillePolice <= 20) {
      taillePolice = taillePolice + 2;
      $("html").css("font-size", taillePolice + "px");
    } else {
      alert("Vous avez atteint la taille maximale.");
    }
  });

  // Mode dyslexique
  $(".dyslexie").click(function (e) {
    $("*").not("i").toggleClass("dyslexic");
  });

  // Haut de page
  var progressPath = document.querySelector(".arrow__circle--shape");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();

  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;

  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".arrow").addClass("arrow__circle");
    } else {
      jQuery(".arrow").removeClass("arrow__circle");
    }
  });
});
