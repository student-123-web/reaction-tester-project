let startTime;
let box = document.getElementById("box");
let timeText = document.getElementById("timeText");

function makeBox() {
  let area = document.getElementById("playArea");

  let maxX = area.clientWidth - 70;
  let maxY = area.clientHeight - 70;

  let x = Math.floor(Math.random() * maxX);
  let y = Math.floor(Math.random() * maxY);

  box.style.left = x + "px";
  box.style.top = y + "px";
  box.style.display = "block";   // 👈 IMPORTANT
  box.style.backgroundColor = randomColor();

  startTime = Date.now();
}

function randomColor() {
  let colors = ["red", "green", "blue", "orange", "purple"];
  let i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

box.onclick = function() {
  let endTime = Date.now();
  let reaction = (endTime - startTime) / 1000;

  timeText.innerHTML = "Reaction Time: " + reaction.toFixed(2) + " sec";

  box.style.display = "none";

  setTimeout(makeBox, Math.random() * 1500 + 500);
}

window.onload = function() {
  setTimeout(makeBox, 1000);
}
