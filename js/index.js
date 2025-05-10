let slogan = "2Laviande est une société dans le but de fournir tout le monde en viande. Notre phrase préférée est: ' J'ai faim! Je veux 2laviande! '";
let cut = slogan.split(" ");
let text = document.getElementById("slogan");
let index = 0;
function affiche(slogan){
    if(index<cut.length){
        text.innerText += " "+cut[index];
        index++;
        setTimeout(affiche,500);
    }
    else{
    setTimeout(() => {
        text.innerText = " ";
        index = 0;
        affiche();
    }, 2500);
    }   
}

//window.onload = affiche;

function main(){
    affiche(slogan);
}
main();