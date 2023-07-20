// VOTO CON SELEZIONE DELLE STELLE - BLOCCO DEL TASTO "MORE INFO"
const  fixBlackStar = document.getElementById("starRate");
const starsArray = [];
const singleStar = `<img src="./assets/star.svg" class="fa-star" alt="Stelle">`

for (let i = 0; i < 10; i++) {
    starsArray.push(singleStar)
}
console.log(starsArray);

for (let i = 0; i < starsArray.length; i++) {
    fixBlackStar.innerHTML += singleStar        
 //    `<i class="fas fa-star"> </i>`
 }

 singleStar.addEventListener("click", fixBlueStar)


//  const mouseOver = function() {
//   starSelect.style.color = "red";
// }

//  const mouseOut  = function() {
//   starSelect.style.color = "black";
// }
const starSelectColorChange = document.getElementsByClassName ("fa-star")

const fixBlueStar  = function() {
    for (let i = 0; i < 10; i++) {
    
    return starSelectColorChange.classList.add( "starColorChange")  
    }
}
   
starSelectColorChange.addEventListener("click", fixBlueStar)


// starSelect.addEventListener("mouseover", mouseOver);

// starSelect.addEventListener("mouseout", mouseOut);

// starSelect.addEventListener("click", fixBlueStar);



// L'UTENTE DEVE SCRIVERE SUL COMMENTO PRIMA DI RICHIEDERE PIU' INFORMAZIONI

let inputRequired = document.getElementById("comment");

const inputBlock = function () {
    if (inputRequired.value.length > 10) {
        websiteButton.addEventListener("click", websiteLink)
   } 
// else {
//     alert("you have to fill out the comment line with at least 11 characters - scrivi un commento di almeno 11 caratteri")
//    }
 }

inputRequired.addEventListener("change",inputBlock);


// LINK DI COLLEGAMENTO AL SITO EPICODE - BUTTON "MORE INFO"

const websiteButton = document.querySelector(".submitButton")
const newLink = document.querySelector("a")

const websiteLink = function () {
newLink.classList.add("linky")
newLink.setAttribute ("href", "https://epicode.com/it/?utm_source=adwords&utm_campaign=Brand&utm_adgroup=brandexact&utm_term=epicode&utm_medium=ppc&hsa_acc=1246633295&hsa_cam=11897141170&hsa_grp=115607542236&hsa_ad=639941169967&hsa_src=g&hsa_tgt=kwd-1083842420863&hsa_kw=epicode&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw8NilBhDOARIsAHzpbLAf1Ex_XcWT_Gv0Np_jksEcvuud48MAqcyw4ZE7xTvVCKFnEd8AWO4aAmxLEALw_wcB")
return websiteButton.appendChild(newLink)
}





