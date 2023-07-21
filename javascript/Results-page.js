const websiteButton = document.querySelector(".results-button");
const newLink = document.querySelector("a");

const feedbackLink = function () {
  newLink.classList.add("linky");
  newLink.setAttribute("href", "Feedback-page.html");
  return websiteButton.appendChild(newLink);
};

websiteButton.addEventListener("click", feedbackLink);

const corrette = 60;
const sbagliate = 40;

const coloreCorrette = "cyan";
const coloreSbagliate = "MediumVioletRed";

const canvas = document.getElementById("myDonutChart");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const radius = Math.min(canvasWidth, canvasHeight) / 2.3;

const centerX = canvasWidth / 2;
const centerY = canvasHeight / 2;

function drawDonutArc(startAngle, endAngle, colore) {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.arc(centerX, centerY, radius * 0.7, endAngle, startAngle, true);
  ctx.closePath();
  ctx.fillStyle = colore;
  ctx.fill();
}

function drawText() {
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const fontSize = 25;
  ctx.font = `${fontSize}px Inter`;

  if (corrette >= 60) {
    ctx.fillStyle = "white";
    ctx.font = `bold ${fontSize}px Inter`;
    ctx.fillText("Congratulations!", centerX, centerY - fontSize * 2);
    ctx.fillStyle = "cyan";
    ctx.fillText("You passed the exam.", centerX, centerY - fontSize);
    ctx.fillStyle = "white";
    ctx.font = `18px Inter`;
    ctx.fillText("We'll send you the certificate", centerX, centerY + fontSize * 0.75);
    ctx.fillText("in a few minutes.", centerX, centerY + fontSize * 1.5);
    ctx.fillText("Check your email (including", centerX, centerY + fontSize * 2.25);
    ctx.fillText("promotions / spam folder)", centerX, centerY + fontSize * 3);
  } else {
    ctx.font = `bold ${fontSize}px Inter`;
    ctx.fillStyle = "red";
    ctx.fillText("You failed the exam.", centerX, centerY - fontSize);
    ctx.fillStyle = "white";
    ctx.font = `18px Inter`;
    ctx.fillText("But don't worry,", centerX, centerY + fontSize * 0.75);
    ctx.fillText("you can always retry", centerX, centerY + fontSize * 1.5);
  }
}

const total = corrette + sbagliate;
const corretteAngle = (corrette / total) * 2 * Math.PI;
const sbagliateAngle = (sbagliate / total) * 2 * Math.PI;
drawDonutArc(-Math.PI / 2 - corretteAngle, -Math.PI / 2, coloreCorrette);

drawDonutArc(-Math.PI / 2, -Math.PI / 2 + sbagliateAngle, coloreSbagliate);

drawText();
