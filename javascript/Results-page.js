const websiteButton = document.querySelector(".results-button")
const newLink = document.querySelector("a")

const feedbackLink = function () {
newLink.classList.add("linky")
newLink.setAttribute ("href", "Feedback-page.html")
return websiteButton.appendChild(newLink)
}

websiteButton.addEventListener("click", feedbackLink)
