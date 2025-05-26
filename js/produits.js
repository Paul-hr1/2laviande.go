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


document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();             // Empêche le comportement par défaut du formulaire

  // Récupération de la valeur entrée dans le champ "Nom du produit"
  const nameFilter = document.getElementById("filterName").value.toLowerCase();
  const minPrice = parseFloat(document.getElementById("minPrice").value);
  const maxPrice = parseFloat(document.getElementById("maxPrice").value);

  // Récupère toutes les sections de produits
  const products = document.querySelectorAll("#menu section.viande");

  // Parcourt chaque produit pour appliquer le filtre
  products.forEach(product => {
      // On récupère le nom du produit (dans le <h2>)
    const name = product.querySelector("h2").textContent.toLowerCase();
    const price = parseFloat(product.querySelector(".price").textContent);

     // Vérifie si le nom du produit contient le texte recherché
    const matchName = name.includes(nameFilter);
    const matchMin = isNaN(minPrice) || price >= minPrice;  // Vérifie si le prix est supérieur ou égal au prix minimum saisi
    const matchMax = isNaN(maxPrice) || price <= maxPrice;

    if (matchName && matchMin && matchMax) { // Si le produit respecte les 3 critères, on l'affiche
      product.style.display = "block";
    } else {
      product.style.display = "none";   // Sinon, on le cache
    }
  });
});