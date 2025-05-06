function displayDateTime(){ // fonction pour affiche la date et l'heure
    let event=new Date(); // initialise la date et l'heure
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };//parametres date
    let date = event.toLocaleDateString('fr-FR',options);
    let heure = event.toLocaleTimeString('fr-FR');
    document.getElementById("date").innerText= date; // affiche du texte dans le html à id=date
    document.getElementById("heure").innerText = heure;

    console.log(heure);
} 

/*function delay(){
    let produit = document.getElementById("produits");
    
}
function loader(){
    let event = null;
} 

function addSegments(digitId){

    let cadran = document.getElementById(digitId); // => identifie le bon cadran
    
    for(let i=0; i<=6; i++){
        let balise = document.createElement("div"); // création d'une balise div segment
        balise.id = `seg${i}`; // => son id
        balise.className =`segment${i} segment off`;  // => ses classes (off par défaut)     
        cadran.appendChild(balise); // ajout de la balise en tant qu'enfant du cadran
    }    
    

} 

function updateDigit(digitId, value){

    let segmentStataddSegmentes = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];

    let balise = document.getElementById(digitId); // => identification du bon cadran
    for(let i=0; i<=6; i++){
        if(segmentStataddSegmentes[value][i] == 0){
            balise.children[i].className =`segment${i} segment off`; // => si la valeur du tableau est 0, la balise a la classe off
        }
        else{
            balise.children[i].className =`segment${i} segment`; // => sinon elle ne la plus
        };
    };
}




function init_chrono(){
    let minutes = 0;
    let secondes = 0;
    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
}

function display_time_chrono(cadran){
    
    updateDigit("hours-tens",cadran[0]); // affichage du temps en fonction de chaques cadrans
    updateDigit("hours-units", cadran[1]);
    updateDigit("minutes-tens", cadran[3]);
    updateDigit("minutes-units", cadran[4]);
    
}






function calcul_Timer() {
    secondes++;
    if (secondes == 60) {
        secondes = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        console.log("waouh cela fait 1 heure que vous êtes sur le site !!")
    }
    
    let cadran = String(minutes) +" : "+ String(secondes);
    return(cadran);
}

 
  
    document.getElementById("suite").innerText= "temps passé sur ce merveilleux site";
    

    */    

function main(){
    setInterval(displayDateTime,1000);
    let time = init_chrono();
    setInterval(display_time_chrono,1000);
}
main();