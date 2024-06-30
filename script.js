document.getElementById("startButton").addEventListener("click", startPicker);
document.getElementById("drawButton").addEventListener("click", drawNumber);
document.getElementById("resetButton").addEventListener("click", resetPicker);
document.getElementById("backButton").addEventListener("click", backToStart);

let maxNumber;
let availableNumbers = [];

function startPicker() {
  maxNumber = parseInt(document.getElementById("maxNumber").value);
  if (isNaN(maxNumber) || maxNumber <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }
  availableNumbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
  document.getElementById("setup").style.display = "none";
  document.getElementById("picker").style.display = "block";
}

function drawNumber() {
  if (availableNumbers.length === 0) {
    alert("No more numbers to draw. Resetting...");
    resetPicker();
    return;
  }
  let randomIndex = Math.floor(Math.random() * availableNumbers.length);
  let drawnNumber = availableNumbers.splice(randomIndex, 1)[0];
  animateResult(drawnNumber);
}

function animateResult(number) {
  let resultDiv = document.getElementById("result");
  resultDiv.textContent = "";
  let counter = 0;
  let interval = setInterval(() => {
    resultDiv.textContent = Math.floor(Math.random() * maxNumber) + 1;
    counter++;
    if (counter >= 20) {
      clearInterval(interval);
      resultDiv.textContent = number;
    }
  }, 50);
}

function resetPicker() {
  document.getElementById("maxNumber").value = "";
  document.getElementById("setup").style.display = "block";
  document.getElementById("picker").style.display = "none";
  document.getElementById("result").textContent = "";
  document.getElementById("resetButton").style.display = "none";
}

function backToStart() {
  resetPicker();
}

// 워터마크 동적으로 추가
document.addEventListener("DOMContentLoaded", () => {
  const watermark = document.createElement("div");
  watermark.className = "watermark";
  watermark.innerHTML = 'Created by <a href="https://github.com/your-github-id" target="_blank">your-github-id</a>';
  document.body.appendChild(watermark);
});
