window.onload = function() {
  const liste = document.querySelectorAll(".grattage");

  liste.forEach(canvas => {
    const ctx = canvas.getContext("2d");

    // Juste recouvrir le canvas en gris, on ne dessine pas l'image dans le canvas
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "destination-out";

    let isDrawing = false;

    function draw(event) {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const x = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
      const y = (event.touches ? event.touches[0].clientY : event.clientY) - rect.top;

      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
    }

    canvas.addEventListener("mousedown", () => isDrawing = true);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseleave", () => isDrawing = false);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("touchstart", () => isDrawing = true);
    canvas.addEventListener("touchend", () => isDrawing = false);
    canvas.addEventListener("touchcancel", () => isDrawing = false);
    canvas.addEventListener("touchmove", draw);
  });
};
