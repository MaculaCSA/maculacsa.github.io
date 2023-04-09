//  Cuando el boton del corto se pulsa
function openPopup(VideoId) {
    // Se cambia el src del iframe
    document.getElementById("IframeVideo").src = "https://www.youtube.com/embed/" + VideoId;
    // Se muestra el div
    document.getElementById("popup").style.display = "block";
}

// Cuando el boton de cerrar se pulsa
function closePopup() {
    // Desaparece el div
    document.getElementById("popup").style.display = "none";
}