function displayDateTime(){ // fonction pour affiche la date et l'heure
    let event=new Date(); // initialise la date et l'heure
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };//parametres date
    let date = event.toLocaleDateString('fr-FR',options);
    let heure = event.toLocaleTimeString('fr-FR');
    document.getElementById("date").innerText= date; // affiche du texte dans le html à id=date
    document.getElementById("heure").innerText = heure;
} 




function delay(){
    const produit = document.getElementById("produits"); //récupérer les id des boutons de la navbar
    let equipe = document.getElementById("equipe");
    let a_propos = document.getElementById("a_propos");
    let logo = document.getElementById("logo");
    
    [produit, equipe, a_propos, logo].forEach(element => {
        if (element) {
            element.addEventListener("click", handleNavigation);
        }
    });
}
function confirmer(page){
    if (confirm("Voulez-vous vraiment naviguer vers la présentation de l'équipe ?")) {
        window.location.href = page;
      }
}

function handleNavigation(event, shouldConfirm = false, confirmMessage = "") {
        const link = event.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href");

        // Skip external links, mailto:, etc.
        if (!href || href.startsWith("http") || href.startsWith("mailto:")) {
            return; // Let default behavior happen
        }

        event.preventDefault();

        // Optional confirmation dialog
        if (shouldConfirm && !confirm(confirmMessage)) {
            return; // Cancel navigation
        }

        const loader = document.getElementById("loader");
        if (loader) loader.style.display = "block";

        setTimeout(() => {
            window.location.href = href;
        }, 2000);
    

    document.addEventListener("DOMContentLoaded", function () {
        const equipeLink = document.getElementById("equipe");

        if (equipeLink) {
            equipeLink.addEventListener("click", function (event) {
                handleNavigation(event, true, "Voulez-vous vraiment naviguer vers la présentation de l'équipe ?");
            });
        }

       
    });
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

function ring(){
    const tel = "02 30 13 05 60";
    const reponse = prompt (`Si vous voulez appeler ce numéro : ${tel}, entrez le de nouveau dans le champ ci-dessous puis validez`);

    if(reponse == tel || reponse == "02.30.13.05.60" || reponse == "0230130560"){
        console.log(`Vous appelez ce numéro : ${tel}`);
        const sonnerie = document.getElementById("sonnerie");
        sonnerie.play();
        setTimeout(() => {
            sonnerie.pause();
            sonnerie.currentTime = 0;
        },10000);
    }
}


function main(){
    
    setInterval(displayDateTime,1000); 
    display_time_chrono();
    delay();

    
    
}

document.addEventListener('copy',function(){
    console.log("Faire du plagiat c'est perdre de l'aura");
});
main();