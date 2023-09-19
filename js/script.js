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

// const mobileNavBtn = document.querySelectorAll(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// mobileNavBtn.forEach(
//   addEventListener("click", function () {
//     headerEl.classList.toggle("nav-open");
//   })
// );

const btnNavOpen = document.querySelector(".btn-nav-open");
const btnNavClose = document.querySelector(".btn-nav-close");
const headerEl = document.querySelector(".header");
const mainNavLink = document.querySelectorAll(".main-nav-link");

btnNavOpen.addEventListener("click", function () {
  headerEl.classList.add("nav-open");
});
btnNavClose.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});
mainNavLink.forEach((link) => {
  link.addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
  });
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
