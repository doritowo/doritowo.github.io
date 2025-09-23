// NAV TOGGLE FOR MOBILE
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");

  // Create hamburger button
  const toggleBtn = document.createElement("div");
  toggleBtn.classList.add("menu-toggle");
  toggleBtn.innerHTML = "☰";
  document.querySelector("nav").appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Auto year in footer
  const footer = document.querySelector("footer p");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Kyle Gabriel Crisostomo`;
  }
});
// Minimal JS: rotates a small footer quote every few seconds

const toggleBtn = document.getElementById("darkToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // switch icon
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

  // load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }
}