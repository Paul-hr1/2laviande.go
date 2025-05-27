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
    // Récupère le lien le plus proche de l'élément cliqué (s'il existe)
    const link = event.target.closest("a");
    // Vérifie si l'élément cliqué est dans une section avec la classe 'viande'
    const viandeSection = event.target.closest("section.viande");

    // Si ce n'est ni un lien <a>, ni une section .viande, on quitte la fonction
    if (!link && !viandeSection) return;

    // Si on a cliqué sur une section .viande mais pas directement sur un lien,
    // on cherche un lien <a> à l’intérieur de cette section
    const targetLink = link || viandeSection.querySelector("a");

    // On récupère la valeur de l'attribut href du lien
    const href = targetLink.getAttribute("href");

    // Si le lien est externe (commence par http, mailto, etc.), on ne fait rien,
    // on laisse le comportement par défaut du navigateur
    if (!href || href.startsWith("http") || href.startsWith("mailto:")) {
        return;
    }

    // Empêche le comportement par défaut du lien (navigation immédiate)
    event.preventDefault();

    // Si une confirmation est demandée, on affiche une boîte de dialogue.
    // Si l'utilisateur annule, on arrête là.
    if (shouldConfirm && !confirm(confirmMessage)) {
        return;
    }

    // Si un élément avec l'id "loader" existe, on l'affiche
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "block";

    // On attend 2 secondes, puis on redirige vers le lien
    setTimeout(() => {
        window.location.href = href;
    }, 2000);

    // Lors du chargement complet du DOM
    document.addEventListener("DOMContentLoaded", function () {
        // Récupère l’élément avec l’ID "equipe"
        const equipeLink = document.getElementById("equipe");

        // Si le lien existe, on lui ajoute un gestionnaire d'événement
        if (equipeLink) {
            equipeLink.addEventListener("click", function (event) {
                // Appelle la fonction avec confirmation avant de naviguer
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
    const tel = "02 30 13 05 60"; // numéro à appeler
    const reponse = prompt (`Si vous voulez appeler ce numéro : ${tel}, entrez le de nouveau dans le champ ci-dessous puis validez`); // affiche une fenetre qui demande de remplir le numéro pour appeler

    if(reponse == tel || reponse == "02.30.13.05.60" || reponse == "0230130560"){ // vérifie différentes façons d'écrir le numéro
        console.log(`Vous appelez ce numéro : ${tel}`); // affiche dans la console la phrase et le numéro appelé
        const sonnerie = document.getElementById("sonnerie"); // récupérer l'audio avec son id
        sonnerie.play(); // lance l'audio
        setTimeout(() => { // mettre la sonnerie en arrêt après 10 secondes
            sonnerie.pause(); // met l'audio en pause
            sonnerie.currentTime = 0; // remet l'audio au début 
        },10000);
    }
}

document.addEventListener('copy',function(){ // déclenche un évènement quand on copy du texte sur la page
    console.log("Faire du plagiat c'est perdre de l'aura"); //affiche le message dans la console
});

function main(){
    
    setInterval(displayDateTime,1000); 
    display_time_chrono();
    delay();

    
    
}
main();