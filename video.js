// obtener el elemento de video
const video = document.getElementById("video");

// función para manejar el evento de scroll
function handleScroll() {
  // obtener la altura de la ventana gráfica del navegador
  const windowHeight = window.innerHeight;

  // obtener la duración total del video en segundos
  const videoDuration = video.duration;

  // obtener la altura total de la página
  const pageHeight = document.body.scrollHeight;

  // obtener la posición vertical actual de la página
  const scrollPosition = window.scrollY;

  // verificar si el valor de scrollPosition es mayor o igual a cero y si el valor de windowHeight y pageHeight son mayores que cero
  if (scrollPosition >= 0 && windowHeight > 0 && pageHeight > 0) {
    // calcular la posición del video en relación a la página
    let videoPosition;

    if (scrollPosition + windowHeight >= pageHeight) {
      // si se llega al final de la página, reproducir hasta el final del video
      videoPosition = 1;
    } else {
      videoPosition = scrollPosition / (pageHeight - windowHeight);
    }

    // calcular el tiempo actual del video
    const currentTime = videoPosition * videoDuration;

    // establecer el tiempo actual del video
    video.currentTime = currentTime;
  }
}

// esperar a que la duración del video se cargue antes de vincular el evento scroll
video.addEventListener("loadedmetadata", () => {
  window.addEventListener("scroll", handleScroll);
});
