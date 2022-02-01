// Accordion JS
new Accordion([".accordion-container-1", ".accordion-container-2"], {
  duration: 400,
  triggerClass: "ac-header",
  onOpen: function onOpen(currElement) {
    const minus = document.querySelector("#" + currElement.id + " .ph-minus-bold");
    const plus = document.querySelector("#" + currElement.id + " .ph-plus-bold");

    plus.style.opacity = "0";
    minus.style.opacity = "1";
    plus.style.display = "none";
    minus.style.display = "block";
  },
  onClose: function onClose(currElement) {
    const minus = document.querySelector("#" + currElement.id + " .ph-minus-bold");
    const plus = document.querySelector("#" + currElement.id + " .ph-plus-bold");

    plus.style.opacity = "1";
    minus.style.opacity = "0";
    plus.style.display = "block";
    minus.style.display = "none";
  },
});

// AOS
AOS.init({ duration: 800, once: true });
