// obtener el elemento de video
const video = document.getElementById("video");

// función para manejar el evento de scroll
function handleScroll() {
  // obtener la altura de la ventana gráfica del navegador
  const windowHeight = window.innerHeight;

  // obtener la duración total del video en segundos
  const videoDuration = video.duration;

  // obtener la posición vertical actual de la página
  const scrollPosition = window.scrollY;

  // verificar si el valor de scrollPosition es mayor o igual a cero y si el valor de windowHeight es mayor que cero
  if (scrollPosition >= 0 && windowHeight > 0) {
    // calcular la posición del video en relación a la página
    const videoPosition = scrollPosition / windowHeight;

    // calcular el frame actual del video
    const currentFrame = Math.round(videoPosition * videoDuration * 30); // 30 es la tasa de frames por segundo del video

    // establecer el frame actual del video
    video.currentTime = currentFrame / 30; // dividir por 30 para obtener el tiempo en segundos
  }
}

// esperar a que la duración del video se cargue antes de vincular el evento scroll
video.addEventListener("loadedmetadata", () => {
  window.addEventListener("scroll", handleScroll);
});
