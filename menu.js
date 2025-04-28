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
main();
//alert("non");
