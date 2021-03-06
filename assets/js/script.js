// Accordion JS
new Accordion([".accordion-container-1", ".accordion-container-2"], {
  duration: 500,
  triggerClass: "ac-header",
  beforeOpen: (currElement) => {
    const minus = document.querySelector("#" + currElement.id + " .ph-minus-bold");
    const plus = document.querySelector("#" + currElement.id + " .ph-plus-bold");

    plus.style.opacity = "0";
    minus.style.opacity = "1";
  },
  beforeClose: (currElement) => {
    const minus = document.querySelector("#" + currElement.id + " .ph-minus-bold");
    const plus = document.querySelector("#" + currElement.id + " .ph-plus-bold");

    plus.style.opacity = "1";
    minus.style.opacity = "0";
  },
});

// AOS
AOS.init({ duration: 800, once: true });

// Magicline
var myMagicLine = new magicLine(document.querySelectorAll(".nav-menu"), {
  mode: "line",
  lineStrength: 3,
  animationCallback: function (el, params) {
    anime({
      targets: el,
      left: params.left,
      top: params.top,
      width: params.width,
      height: params.height,
    });
  },
});
myMagicLine.init();

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const activeLink = document.querySelector(".act");
    activeLink.classList.remove("act");
    link.classList.add("act");
  });
});

const darkmodeToggle = document.querySelector(".darkmode-toggle");
const logo = document.querySelectorAll(".logo");
const iconDarkmode = document.querySelectorAll(".darkmode-toggle i");

darkmodeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  if (document.body.classList.contains("dark")) {
    iconDarkmode[0].style.opacity = 0;
    iconDarkmode[1].style.opacity = 1;
    for (i = 0; i < logo.length; i++) {
      logo[i].src = "assets/img/twas-light.webp";
    }
  } else {
    iconDarkmode[1].style.opacity = 0;
    iconDarkmode[0].style.opacity = 1;
    for (i = 0; i < logo.length; i++) {
      logo[i].src = "assets/img/twas-dark.webp";
    }
  }
});

const responsiveToggle = document.getElementById("menu_toggle");
const navMenu = document.querySelector(".nav-menu");

responsiveToggle.addEventListener("change", (e) => {
  if (responsiveToggle.checked) {
    navMenu.classList.add("active");
  } else {
    navMenu.classList.remove("active");
  }
});
