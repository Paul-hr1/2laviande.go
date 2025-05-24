// A FINIR

function validationChoix() {
    const form = document.getElementById('Form');
    const erreur = document.getElementById('erreurChoix');
    const erreurPrenom = document.getElementById('erreurPrenom');
    const choix = form.elements['choix'];
    const prenom = form.elements['prenom'];


    form.addEventListener('submit', function(e) {
        if(prenom.value == "")
        
        
        let checked = false;
        for(let i = 0; i < choix.length; i++) {
            if (choix[i].checked) checked = true;
        }
        if (!checked) {
            e.preventDefault();
            erreur.style.visibility = 'visible';
        } else {
            erreur.style.visibility = 'hidden';
        }
    });
}

function validationPrenom(){

}

function main(){
    document.addEventListener('DOMContentLoaded', validationChoix);
}
main();    
