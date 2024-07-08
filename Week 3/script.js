const textAreaInput = document.getElementById("input");
textAreaInput.addEventListener("input", function () {
  const text = textAreaInput.value.trim();
  const words = text.split(" ").length;
  const characters = text.length;
  const spacesArray = text.match(/\s/g);
  const spaces = spacesArray ? spacesArray.length : "-"; // Handle null case
  const digitsArray = text.match(/\d/g);
  const digits = digitsArray ? digitsArray.length : "-"; // Handle null case
  const lettersArray = text.match(/[a-zA-Z]/g);
  const letters = lettersArray ? lettersArray.length : "-"; // Handle null case
  const sCharactersArray = text.match(/[^a-zA-Z0-9\s]/g);
  const sCharacters = sCharactersArray ? sCharactersArray.length : "-"; // Handle null case
  //   const paragraphsArray = text.replace(/\n$/gm, "").split(/\n/);
  //   const paragraphs = paragraphsArray ? paragraphsArray.length : "-"; // Handle null case
  const paragraphs = text.split("\n").length;
  const sentences = text.split(/[.?!]/g).filter(Boolean).length;

  document.getElementById("words").innerText = words - 1;
  document.getElementById("characters").innerText = characters;
  document.getElementById("spaces").innerText = spaces;
  document.getElementById("digits").innerText = digits;
  document.getElementById("letters").innerText = letters;
  document.getElementById("special-characters").innerText = sCharacters;
  document.getElementById("paragraphs").innerText = paragraphs;
  document.getElementById("sentences").innerText = sentences;
});

// Get elements
const modeToggle = document.getElementById("modeToggle");
const toggleLightMode = document.getElementById("toggleLightMode");
const toggleDarkMode = document.getElementById("toggleDarkMode");
const body = document.body;
const main = document.getElementById("main");
const input = document.getElementById("input");
const metrics = document.getElementById("metrics");

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
