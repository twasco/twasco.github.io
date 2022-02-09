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
var myMagicLine = new magicLine(document.querySelectorAll(".navbar"), {
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
  link.addEventListener("click", (e) => {
    const activeLink = document.querySelector(".act");
    activeLink.classList.remove("act");
    link.classList.add("act");
  });
});

const switchTheme = document.querySelector("#switchTheme");
const logo = document.querySelectorAll(".logo");

switchTheme.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  if (document.body.classList.contains("dark")) {
    for (i = 0; i < logo.length; i++) {
      logo[i].src = "assets/img/twas-light.webp";
    }
  } else {
    for (i = 0; i < logo.length; i++) {
      logo[i].src = "assets/img/twas-dark.webp";
    }
  }
});
