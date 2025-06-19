const quotes = [
  "JavaScript is fun to learn.",
  "Typing fast is a useful skill.",
  "Practice makes a coder perfect.",
  "Code daily to improve yourself.",
  "Learning never stops for developers.",
];

let startTime, endTime;
const quoteDisplay = document.getElementById("quote");
const inputArea = document.getElementById("inputArea");
const resultDisplay = document.getElementById("result");

function startTest() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
  inputArea.value = "";
  inputArea.disabled = false;
  inputArea.focus();
  startTime = new Date().getTime();
  resultDisplay.textContent = "";
}

function endTest() {
  endTime = new Date().getTime();
  let totalTime = (endTime - startTime) / 1000; // in seconds
  let typedText = inputArea.value.trim();
  let wordCount = typedText.split(" ").length;

  let speed = Math.round((wordCount / totalTime) * 60);
  resultDisplay.textContent = `Your typing speed is ${speed} words per minute.`;

  inputArea.disabled = true;
}
