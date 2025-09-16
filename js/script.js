// script.js

const funLines = [
  " YOUR MAMA!",
  " Powered by energen and chaotic playlists.",
  " Bard, The Wandering Caretaker ",
  " I love you clairo <3 ",
  " Onee-chan, haaiii "
];

const funLineEl = document.getElementById("fun-line");
let index = 0;

// Show the first line initially
funLineEl.textContent = funLines[index];

// Function to show next line
function showNextLine() {
  index = (index + 1) % funLines.length; // loop back to start
  funLineEl.textContent = funLines[index];
}

// Change line every 3 seconds (3000 ms)
setInterval(showNextLine, 3000);