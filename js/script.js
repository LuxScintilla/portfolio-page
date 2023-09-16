const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
    }
    if (entry.isIntersecting === true) {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    // Event happens as soon as 0% of hero section is visible
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

const mobileNavBtn = document.querySelectorAll(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

mobileNavBtn.forEach(
  addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  })
);
