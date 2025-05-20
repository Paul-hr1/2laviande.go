const canvas = document.getElementById("grattage");
    const ctx = canvas.getContext("2d"); // contexte
    const image = new Image();
    image.src = "../images/ph.jpg"; // image à révéler

    image.onload = () => {
      // Dessiner l'image à révéler
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Ajouter une couche grise par-dessus
      ctx.globalCompositeOperation = "source-over"; // dessine par dessus de l'image déja existante
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Mode grattage
      ctx.globalCompositeOperation = "destination-out";  // les traits de la souris agissent comme une gomme, en effaçant des parties.
    };

    let isDrawing = false; // verrou (faut'il dessiner ou non?)

    function draw(event) {  // event contient toutes les infos utiles concernant les inputs
      if (!isDrawing) return; 

      const rect = canvas.getBoundingClientRect(); // renvoie le rectangle du canvas (donc de l'image)
      const x = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left; // position x de la souris
      const y = (event.touches ? event.touches[0].clientY : event.clientY) - rect.top; // position y de la souris

      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2); // former un rond autour de la souris
      ctx.fill();
    }

    // Événements souris (pour les pc)
    canvas.addEventListener("mousedown", () => isDrawing = true); 
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mousemove", draw); // quand la souris bouge on active la fonction draw

    // Événements tactiles (pour les écrans tactiles)
    canvas.addEventListener("touchstart", () => isDrawing = true); 
    canvas.addEventListener("touchend", () => isDrawing = false);
    canvas.addEventListener("touchmove", draw);