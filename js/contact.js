function configurerValidationFormulaire() { // fonction qui vérifie si le formulaire peut être envoyé
    // récupérer les différents champs du formulaire
    const form = document.getElementById('Form');
    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const mail = document.getElementById('mail');
    const commentaire = document.getElementById('commentaire');
    const erreurPrenom = document.getElementById('erreurPrenom');
    const erreurChoix = document.getElementById('erreurChoix');
    const erreurNom = document.getElementById('erreurNom');
    const erreurMail = document.getElementById('erreurMail');
    const erreurComment = document.getElementById('erreurComment');
    
    form.addEventListener('input', function (event) { // écoute les changements effectuer dans le input
        let formulaireValide = true; // met le formulaire valide au début

        if (prenom.value == "") { // vérifie que le prénom n'est pas vide
            erreurPrenom.style.visibility = 'visible'; // affiche le message d'erreur
            formulaireValide = false; // met le formulaire invalide
        } 
        else {
            erreurPrenom.style.visibility = 'hidden'; // cache le message d'erreur
        }

        if(nom.value == ""){ // vérifie que le nom n'est pas vide
            erreurNom.style.visibility = 'visible'; // affiche le message d'erreur
            formulaireValide = false; // met le formulaire invalide
        }
        else{
            erreurNom.style.visibility = 'hidden'; // cache le message d'erreur
        }

        if(mail.value == ""){ // vérifie que le mail n'est pas vide
            erreurMail.style.visibility = 'visible'; //affiche le message d'erreur
            formulaireValide = false; // met le formulaire invalide
        }
    else{
        erreurMail.style.visibility = 'hidden'; // cache le message d'erreur
    }

    if(commentaire.value.length < 20 || commentaire.value.length > 1000){ // vérifie que le commentaire est compris entre 20 et 1000 caractères
        erreurComment.style.visibility = 'visible'; // affiche le message d'erreur
        formulaireValide = false; // met le formulaire invalide
    }
    else{
        erreurComment.style.visibility = 'hidden'; // cache le message d'erreur
    }

    const choix = document.querySelectorAll('input[name="choix"]'); // vérifie qu'un bouton radio est coché
    let choixValide = false; // aucun bouton n'est coché
    choix.forEach(function (radio) { // parcours les boutons
        if (radio.checked) { // si bouton coché
            choixValide = true; // validé
        }
        });

    if (choixValide == false) { // si aucun bouton cohché
        erreurChoix.style.visibility = 'visible'; // affiche le message d'erreur
        formulaireValide = false; // met le formulaire invalide
    } else {
        erreurChoix.style.visibility = 'hidden'; // cache le message d'erreur
    }

    if (formulaireValide == false) { // si formulaire invalide
        event.preventDefault(); // bloque l'action par défaut
        document.getElementById('submit').disabled = true; // désactive le bouton envoyer
    }
    else{
        document.getElementById('submit').disabled = false; // active le bouton envoyer
    }
    
  });
}

document.addEventListener('DOMContentLoaded', configurerValidationFormulaire); // quand DOM chargé lancer la fonction