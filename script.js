document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav ul");

  mobileMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Check screen size and adjust menu
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      if (!nav.classList.contains("show")) {
        nav.style.display = "none";
      }
    } else {
      nav.style.display = "flex";
      nav.classList.remove("show");
    }
  }

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".contact-card, .property-card");
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const animationPoint = windowHeight / 1.2;

      if (elementPosition < animationPoint) {
        element.classList.add("animated");
      }
    });
  };

  // Run once on load
  animateOnScroll();

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);
});
