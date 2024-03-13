// script.js
document.addEventListener("DOMContentLoaded", function () {
  var fadeElems = document.querySelectorAll(".fade-in-text");

  function checkFade() {
    fadeElems.forEach(function (elem) {
      var distInView =
        elem.getBoundingClientRect().top - window.innerHeight + 100;
      if (distInView < 0) {
        elem.classList.add("opacity-100");
        elem.classList.remove("opacity-0");
      } else {
        elem.classList.add("opacity-0");
        elem.classList.remove("opacity-100");
      }
    });
  }

  // Run checkFade on page load
  checkFade();

  // Run checkFade every time the window is scrolled
  window.addEventListener("scroll", checkFade);
});
