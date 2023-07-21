const websiteButton = document.querySelector(".inactiveSubmitButton");
const newLink = document.querySelector("a");

const benchmarkLink = function () {
  if (checkPromiseBox.checked) {
    newLink.classList.add("linky");
    newLink.setAttribute("href", "./Question-page.html");
    window.location.href = newLink.getAttribute("href"); // Cambiamo la pagina solo se la casella di controllo è attivata
  }
};

const checkPromiseBox = document.getElementById("WP-input");
const boxChecked = function () {
  if (checkPromiseBox.checked) {
    websiteButton.classList.remove("inactiveSubmitButton");
    websiteButton.classList.add("submitButton");
    websiteButton.addEventListener("click", benchmarkLink);
  } else {
    websiteButton.classList.remove("submitButton");
    websiteButton.classList.add("inactiveSubmitButton");
    websiteButton.removeEventListener("click", benchmarkLink);
  }
};

checkPromiseBox.addEventListener("click", boxChecked);
