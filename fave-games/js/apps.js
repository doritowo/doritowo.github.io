// Tiny flavor: highlight a random game on load
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".game-card");
    const random = Math.floor(Math.random() * cards.length);
    cards[random].classList.add("highlight");
});

// Extra highlight style via JS
const style = document.createElement("style");
style.innerHTML = `
  .highlight {
    border: 2px solid #f39c12;
    transform: scale(1.05);
  }
`;
document.head.appendChild(style);
