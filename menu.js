function displayDateTime(){ // fonction pour affiche la date et l'heure
    let event=new Date(); // initialise la date et l'heure
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };//parametres date
    let date = event.toLocaleDateString('fr-FR',options);
    let heure = event.toLocaleTimeString('fr-FR');
    document.getElementById("date").innerText= date; // affiche du texte dans le html à id=date
    document.getElementById("heure").innerText = heure;

    console.log(heure);
} 

function delay(){
    let produit = document.getElementById("produits");
    
}
function loader(){
    let event = null;
}
function main(){
    setInterval(displayDateTime,1000);
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

    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
    let date = new Date();
    let time = date.toLocaleTimeString('fr-FR'); // => obtention du temps réelle
    time = "00:00"
    return time;
}

function display_time_chrono(){
    
    
    updateDigit("hours-tens",time[0]); // affichage du temps en fonction de chaques cadrans
    updateDigit("hours-units", time[1]);
    updateDigit("minutes-tens", time[3]);
    updateDigit("minutes-units", time[4]);
    
}
main(){
    let time = init_chrono();
    setInterval(display_time_chrono(),1000);
}
//alert("non");
