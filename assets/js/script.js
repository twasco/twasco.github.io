const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const activeLink = document.querySelector(".act");
    activeLink.classList.remove("act");
    link.classList.add("act");
  });
});

// Accordion JS
new Accordion([".accordion-container-1", ".accordion-container-2"], {
  duration: 500,
  triggerClass: "ac-header",
  beforeOpen: (currElement) => {
    const minus = document.querySelector("#" + currElement.id + " .ph-minus-bold");
    const plus = document.querySelector("#" + currElement.id + " .ph-plus-bold");

    plus.style.opacity = "0";
    minus.style.opacity = "1";
    plus.style.visibility = "none";
    minus.style.visibility = "visible";
  },
  beforeClose: (currElement) => {
    const minus = document.querySelector("#" + currElement.id + " .ph-minus-bold");
    const plus = document.querySelector("#" + currElement.id + " .ph-plus-bold");

    plus.style.opacity = "1";
    minus.style.opacity = "0";
    plus.style.visibility = "visible";
    minus.style.visibility = "none";
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
