// VOTO CON SELEZIONE DELLE STELLE - BLOCCO DEL TASTO "MORE INFO"


const starWrapper = document.querySelector("#starRate");
let singleStar = 0;
let starList =  getStars(singleStar);

//ENTERING STARS

function getDomStars(list) {

    for(let i = 0; i <= list.length - 1; i++) {

        starWrapper.innerHTML += `${list[i]}`;

    }
}
getDomStars(starList)
const star = document.querySelectorAll('.fa-star');
getEventListener();

//EVEN LISTENER FOR SINGLE STARS



function getEventListener() {
   const star = document.querySelectorAll('.fa-star');
for (let i = 0; i <= star.length - 1; i++) {

    star[i].addEventListener('click', function() { 

        singleStar = parseInt([i + 1]);
        starList = getStars(singleStar);
        removeDomStars();
        getDomStars(starList);
        getEventListener();
    });
}
}

//REMOVE STARS

function removeDomStars() {

    for(let i = 1; i <= star.length; i++) {

        const eraseStar = document.querySelector("i:first-child")
        eraseStar.parentElement.removeChild(eraseStar)

    }

}

// PUSH 
function getStars(number) {

    let newStar = [];

    for(let i = 0; i < number ; i++) {
        
        let singleStar = `<i class="fas fa-star big" style="color: #00ffff" id="star${i}"></i>`
        newStar.push(singleStar)

    }
    for(let i = number; i <= (10 - 1) ; i++) {
        
        let singleStar = `<i class="fas fa-star big" style="color: #000000"  id="star${i}"></i>` 
        newStar.push(singleStar)

    }

    return newStar;
}


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





