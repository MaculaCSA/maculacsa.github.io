//  Aparece el div con la id de popup
function openPopup(VideoId) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("IframeVideo").src = "https://www.youtube.com/embed/" + VideoId;
}

// Desaparece el div con la id de popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}