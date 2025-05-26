function scrollToTop() {        // Cette fonction fait défiler la page en haut de façon fluide
  window.scrollTo({           //On utilise l'API window.scrollTo pour faire défiler la page 
    top: 0,               //On définit la position verticale de défilement à 0 (haut de la page)
    behavior: "smooth"     //On applique un effet de défilement fluide
  });
}

// Fonction pour basculer l'image 1 entre deux images
function changeImage1() {
 // On récupère la section avec l'ID "img1"
  const section = document.getElementById("img1");

  // Puis on récupère l'image <img> à l'intérieur de cette section
  const img = section.querySelector("img");

  // On vérifie si l'image actuelle contient"boeuf1.jpg"
  if (img.src.includes("boeuf1.jpg")) {
    // Si oui, on la change pour "boeuf2.jpg"
    img.src = "../images/boeuf2.jpg";
  } else {
    // Sinon, on revient à l'image d'origine
    img.src = "../images/boeuf1.jpg";
  }
}

function changeImage2() {
  // On récupère directement l'image par son ID
  const img = document.getElementById("img2");

  // On vérifie si l'image actuelle est "agneau.jpg"
  if (img.src.includes("agneau.jpg")) {
    // Si oui, on la change pour "cotelette2.jpg"
    img.src = "../images/cotelette2.jpg";
  } else {
    // Sinon, on revient à l'image d'origine
    img.src = "../images/agneau.jpg";
  }
}

function changeImage3() {
 // On récupère la section avec l'ID "img3"
  const section = document.getElementById("img3");

  // Puis on récupère l'image <img> à l'intérieur de cette section
  const img = section.querySelector("img");

  // On vérifie si l'image actuelle contient "porc.jpg"
  if (img.src.includes("porc.png")) {
    // Si oui, on la change pour "porc2.jpg"
    img.src = "../images/porc2.jpg";
  } else {
    // Sinon, on revient à l'image d'origine
    img.src = "../images/porc.png";
  }
}

function changeImage4() {
 // On récupère la section avec l'ID "img4"
  const section = document.getElementById("img4");

  // Puis on récupère l'image <img> à l'intérieur de cette section
  const img = section.querySelector("img");

  // On vérifie si l'image actuelle contient "poulet.jpg"
  if (img.src.includes("poulet.jpg")) {
    // Si oui, on la change pour "poulet2.jpg"
    img.src = "../images/poulet-2.jpeg";
  } else {
    // Sinon, on revient à l'image d'origine
    img.src = "../images/poulet.jpg";
  }
}
