window.onload = function() {
  const liste = document.querySelectorAll(".grattage");  // prends les div

  liste.forEach(canvas => {
    const ctx = canvas.getContext("2d");

    // Juste recouvrir le canvas en gris, on ne dessine pas l'image dans le canvas
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "destination-out"; // la souris "enlève" l'image

    let isDrawing = false; // verrou pour savoir s'il faut dessiner ou non

    function draw(event) {
      if (!isDrawing) return; // condition 

      const rect = canvas.getBoundingClientRect(); // rectangle correspondant au curseur
      const x = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left; // position x de la souris
      const y = (event.touches ? event.touches[0].clientY : event.clientY) - rect.top; // y

      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2); // cercle autour de la souris
      ctx.fill();
    }
    // pc
    canvas.addEventListener("mousedown", () => isDrawing = true); // si la souris appuie
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseleave", () => isDrawing = false);
    canvas.addEventListener("mousemove", draw); // appel de la fonction draw

    // tactile
    canvas.addEventListener("touchstart", () => isDrawing = true); // si le doigt touche l'écran
    canvas.addEventListener("touchend", () => isDrawing = false);
    canvas.addEventListener("touchcancel", () => isDrawing = false);
    canvas.addEventListener("touchmove", draw);
  });
};
