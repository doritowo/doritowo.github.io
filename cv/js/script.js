const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // optional: change icon depending on mode
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});