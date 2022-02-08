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
  duration: 400,
  triggerClass: "ac-header",
  onOpen: function onOpen(currElement) {
    const minus = document.querySelector("#" + currElement.id + " .ph-minus-bold");
    const plus = document.querySelector("#" + currElement.id + " .ph-plus-bold");

    plus.style.display = "none";
    minus.style.display = "block";
  },
  onClose: function onClose(currElement) {
    const minus = document.querySelector("#" + currElement.id + " .ph-minus-bold");
    const plus = document.querySelector("#" + currElement.id + " .ph-plus-bold");

    plus.style.display = "block";
    minus.style.display = "none";
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
