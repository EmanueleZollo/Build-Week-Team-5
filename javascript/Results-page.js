const websiteButton = document.querySelector(".results-button");
const newLink = document.querySelector("a");

const feedbackLink = function () {
  newLink.classList.add("linky");
  newLink.setAttribute("href", "Feedback-page.html");
  return websiteButton.appendChild(newLink);
};

websiteButton.addEventListener("click", feedbackLink);

let scoreX = localStorage.getItem("scoreX");
console.log(scoreX);

const resScore = document.getElementById("resultScore");
resScore.innerHTML = scoreX;
