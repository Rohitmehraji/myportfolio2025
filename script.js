// Typing effect
const text = "Aspiring Software Engineer | AI/ML Enthusiast";
let index = 0;
function type() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Smooth scroll
document.querySelector(".scroll-btn").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".card, .skills-grid span");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.6s ease-out";
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// Year auto-update
document.getElementById("year").textContent = new Date().getFullYear();
