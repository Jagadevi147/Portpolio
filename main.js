// Smooth scrolling for nav links (if nav exists)
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// View More / View Less toggle
document.querySelectorAll(".view-more-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const details = document.getElementById(targetId);
    if (details.style.display === "block") {
      details.style.display = "none";
      this.textContent = "View More";
    } else {
      details.style.display = "block";
      this.textContent = "View Less";
    }
  });
});

// Animate headers on scroll
function animateOnScroll() {
  document.querySelectorAll(".animate").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("DOMContentLoaded", animateOnScroll);
