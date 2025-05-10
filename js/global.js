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
    const produit = document.getElementById("produits"); //récupérer les id des boutons de la navbar
    let equipe = document.getElementById("equipe");
    let a_propos = document.getElementById("a_propos");
    let logo = document.getElementById("logo");
    //activer la fonction loader on cliquant sur les boutons de la navbar
    produit.addEventListener("click", loader);         
    equipe.addEventListener("click", loader);
    a_propos.addEventListener("click", loader);
    logo.addEventListener("click", loader);
}

function loader(event){
    event.preventDefault();

    let load = document.getElementById("loader");
    load.style.display = 'block';

    setTimeout(() => {   //cacher le loader après 2s
        //load.style.display = 'none';
       window.location.assign(event.target.href);   
    }, 2000);
}

function display_time_chrono(){
    let secondes = 0;
    let minutes = 0;  
    let cadran ="";
    setInterval(function() {
        secondes++;
        if(secondes >= 60){
            minutes++;
            secondes = 0;
        }
        if (minutes >= 60) {
            minutes = 0;
            console.log("waouh! Cela fait 1 heure que vous êtes sur le site !!")
        }     
        cadran = "Temps passé sur le site : " + String(minutes) + "min "+ String(secondes) + "s";
        document.getElementById("chrono").innerText = cadran
    },1000);   
}


function main(){
    setInterval(displayDateTime,1000); 
    display_time_chrono();
    delay();
    
    
}

main();