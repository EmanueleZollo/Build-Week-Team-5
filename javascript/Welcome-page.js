const websiteButton = document.querySelector(".submitButton")
const newLink = document.querySelector("a")

const benchmarkLink = function () {
newLink.classList.add("linky")
newLink.setAttribute ("href", "./Question-page.html")
return websiteButton.appendChild(newLink)
}

const checkPromiseBox = document.getElementById("WP-input")
const boxChecked = function () {
if (checkPromiseBox.checked === true) {
    websiteButton.addEventListener("click", benchmarkLink)
} 
}

checkPromiseBox.addEventListener("click", boxChecked)