let slogan = "2Laviande est une société dans le but de fournir tout le monde en viande. Notre phrase préférée est: ' J'ai faim! Je veux 2laviande! '";
let cut = slogan.split(" "); // découpe le slogan en un tableau de mots
let text = document.getElementById("slogan"); // récupération de l'id slogan dans le html
let index = 0;  
function affiche(slogan){ // fonction pour affiche mot par mot le slogan
    if(index<cut.length){
        text.innerText += " "+cut[index]; // ajout du mot suivant 
        index++;
        setTimeout(affiche,500); // delai entre chaque mot qui s'affiche
    }
    else{
    setTimeout(function() {  // si tout est affiché on attend 2.5 secondes 
        text.innerText = " "; // on enlève tout le texte affiché
        index = 0;
        affiche(); // l'affichage reprend
    }, 2500);
    }   
}

function main(){
    affiche(slogan);
}
main();