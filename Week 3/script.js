// Get elements
const textAreaInput = document.getElementById("input");
const modeToggle = document.getElementById("modeToggle");
const toggleLightMode = document.getElementById("toggleLightMode");
const toggleDarkMode = document.getElementById("toggleDarkMode");
const body = document.body;
const main = document.getElementById("main");
const input = document.getElementById("input");
const metrics = document.getElementById("metrics");

// Character counting and metrics update
textAreaInput.addEventListener("input", function () {
  const text = textAreaInput.value.trim();
  const words = text.split(/\s+/).length;
  const characters = text.length;
  const spaces = text.split(" ").length - 1;
  const digits = text.match(/\d/g)?.length || 0;
  const letters = text.match(/[a-zA-Z]/g)?.length || 0;
  const sCharacters = text.match(/[^a-zA-Z0-9\s]/g)?.length || 0;
  const paragraphs = text.split("\n").length;
  const sentences = text.split(/[.?!]/g).filter(Boolean).length;

  // Update DOM elements with calculated values
  document.getElementById("words").innerText = words;
  document.getElementById("characters").innerText = characters;
  document.getElementById("spaces").innerText = spaces;
  document.getElementById("digits").innerText = digits;
  document.getElementById("letters").innerText = letters;
  document.getElementById("special-characters").innerText = sCharacters;
  document.getElementById("paragraphs").innerText = paragraphs;
  document.getElementById("sentences").innerText = sentences;
});

// Toggle classes for light and dark modes
toggleLightMode.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  main.classList.remove("dark-mode");
  main.classList.add("light-mode");
  input.classList.remove("bg-grey");
  metrics.classList.remove("bg-grey");
  input.classList.add("bg-light-grey");
  metrics.classList.add("bg-light-grey");
});

toggleDarkMode.addEventListener("click", () => {
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  main.classList.remove("light-mode");
  main.classList.add("dark-mode");
  input.classList.add("bg-grey");
  metrics.classList.add("bg-grey");
  input.classList.remove("bg-light-grey");
  metrics.classList.remove("bg-light-grey");
});
