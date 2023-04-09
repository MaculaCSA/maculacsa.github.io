//  Cuando el boton del corto se pulsa
function openPopup(VideoId) {
    // Se muestra el div
    document.getElementById("popup").style.display = "block";
    // Se cambia el src del iframe
    document.getElementById("IframeVideo").src = "https://www.youtube.com/embed/" + VideoId;
}

// Cuando el boton de cerrar se pulsa
function closePopup() {
    // Desaparece el div
    document.getElementById("popup").style.display = "none";
}