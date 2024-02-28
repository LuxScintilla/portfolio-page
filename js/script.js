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

// -------------- emailJS --------------

const fullName = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("your-message");
const contactButton = document.querySelector(".contact-submit");

window.onload = function () {
  document
    .querySelector(".contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        () => {
          console.log("SUCCESS!");

          fullName.textContent = "";
          emailInput.textContent = "";
          messageInput.textContent = "";
          contactButton.textContent = "Message has been sent";

          setTimeout(() => {
            contactButton.textContent = "Submit";
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error);

          contactButton.textContent = error.message;

          setTimeout(() => {
            contactButton.textContent = "Submit";
          }, 5000);
        }
      );
    });
};
