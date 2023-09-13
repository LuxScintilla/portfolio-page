const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    // Event happens as soon as 0% of hero section is visible
    threshold: 0,
  }
);
obs.observe(sectionHeroEl);
