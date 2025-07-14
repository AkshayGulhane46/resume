document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".pagination .dot");

  function setActiveDot() {
    let index = sections.length;

    while (--index >= 1) {
      const sectionTop = sections[index].getBoundingClientRect().top;
      if (sectionTop < window.innerHeight / 2) {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
        break;
      }
    }
  }

  window.addEventListener("scroll", setActiveDot);
  window.addEventListener("load", setActiveDot);
});
