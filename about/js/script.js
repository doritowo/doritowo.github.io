// Minimal JS: rotates a small footer quote every few seconds
const quotes = [
    "Stay curious.",
    "Build small, dream big.",
    "Minimalism is clarity.",
    "Always learning, always growing."
];

let index = 0;
const footer = document.querySelector("footer p");

setInterval(() => {
    index = (index + 1) % quotes.length;
    footer.textContent = quotes[index];
}, 4000);