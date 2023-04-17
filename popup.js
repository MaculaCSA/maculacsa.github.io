const userAgent = navigator.userAgent;

//  Cuando el boton del corto se pulsa
function openPopup(VideoId) {
    // Si el usuario es de movil, en vez de ejecutarse close popup se redirige a la pagina de youtube
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        url("https://www.youtube.com/watch?v=" + VideoId);
    }
    else {
        // Se cambia el src del iframe
        document.getElementById("IframeVideo").src = "https://www.youtube.com/embed/" + VideoId;
        // Se muestra el div
        document.getElementById("popup").style.display = "block";
        document.getElementById("closePopup").style.display = "block";
    }
}

// Abrir popup para carteles
function openPopupImg(ImageId) {
    // Se cambia el src del iframe
    document.getElementById("IframeImg").src = "img/" + ImageId;
    // Se muestra el div
    document.getElementById("popupImg").style.display = "block";
    document.getElementById("closePopup").style.display = "block";

}

// Cuando el boton de cerrar se pulsa
function closePopup() {
    // Desaparece el div
    document.getElementById("popup").style.display = "none";
    document.getElementById("popupImg").style.display = "none";
    document.getElementById("closePopup").style.display = "none";
}

// Redirigir a una web
function url(url) {
    window.open(url);
}