const websiteButton = document.querySelector(".submitButton")
const newLink = document.createElement("a")

const websiteLink = function () {
newLink.classList.add("linky")
newLink.setAttribute ("href", "https://epicode.com/it/?utm_source=adwords&utm_campaign=Brand&utm_adgroup=brandexact&utm_term=epicode&utm_medium=ppc&hsa_acc=1246633295&hsa_cam=11897141170&hsa_grp=115607542236&hsa_ad=639941169967&hsa_src=g&hsa_tgt=kwd-1083842420863&hsa_kw=epicode&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw8NilBhDOARIsAHzpbLAf1Ex_XcWT_Gv0Np_jksEcvuud48MAqcyw4ZE7xTvVCKFnEd8AWO4aAmxLEALw_wcB")
newLink.innerText = "MORE INFO"
return websiteButton.appendChild(newLink)
}

const inputRequired = document.querySelector("#comment")

const inputBlock = function () {
    if (inputRequired.length >10) {
        websiteLink()
   } else {
    alert("you have to fill out the comment line with at least 11 characters /n scrivi un commento di almeno 11 caratteri")
   }
}

websiteButton.addEventListener("click", inputBlock)