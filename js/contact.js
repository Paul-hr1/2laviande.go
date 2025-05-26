function configurerValidationFormulaire() {
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
    
    form.addEventListener('input', function (event) {
        let formulaireValide = true;

        // Vérification du prénom
        if (prenom.value == "") {
            erreurPrenom.style.visibility = 'visible';
            formulaireValide = false;
        } 
        else {
            erreurPrenom.style.visibility = 'hidden';
        }

        // vérification du nom
        if(nom.value == ""){
            erreurNom.style.visibility = 'visible';
            formulaireValide = false;
        }
        else{
            erreurNom.style.visibility = 'hidden';
        }

        // vérification du mail
        if(mail.value == ""){
            erreurMail.style.visibility = 'visible';
            formulaireValide = false;
        }
    else{
        erreurMail.style.visibility = 'hidden';
    }

    // vérification du commentaire
    if(commentaire.value.length < 20){
        erreurComment.style.visibility = 'visible';
        formulaireValide = false;
    }
    else{
        erreurComment.style.visibility = 'hidden';
    }

    // Vérification du choix
    const choix = document.querySelectorAll('input[name="choix"]');
    let choixValide = false;
    choix.forEach(function (radio) {
        if (radio.checked) {
            choixValide = true;
        }
        });

    if (choixValide == false) {
        erreurChoix.style.visibility = 'visible';
        formulaireValide = false;
    } else {
        erreurChoix.style.visibility = 'hidden';
    }

    if (formulaireValide == false) {
        event.preventDefault();
        document.getElementById('submit').disabled = true;
    }
    else{
        document.getElementById('submit').disabled = false;
    }
    
  });
}

document.addEventListener('DOMContentLoaded', configurerValidationFormulaire);