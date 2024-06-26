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
    alert("모든 수를 한 번씩 뽑았습니다. 처음으로...");
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
