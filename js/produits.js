function scrollToTop() {        // Cette fonction fait défiler la page en haut de façon fluide
  window.scrollTo({           //On utilise l'API window.scrollTo pour faire défiler la page 
    top: 0,               //On définit la position verticale de défilement à 0 (haut de la page)
    behavior: "smooth"     //On applique un effet de défilement fluide
  });
}
