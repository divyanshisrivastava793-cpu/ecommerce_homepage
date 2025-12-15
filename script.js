// Smooth scroll interaction (light & clean)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href") === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });
});

// Simple hover feedback (optional enhancement)
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
