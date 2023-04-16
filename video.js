const video = document.getElementById("video");
const videoHeight = 1080; // altura del video en píxeles
const windowHeight = window.innerHeight; // altura de la ventana del navegador en píxeles
const speed = 0.2; // velocidad de transición del video (0.2 significa que se actualizará un 20% del camino hacia el valor de destino en cada fotograma de animación)

let targetTime = 0; // tiempo de destino para el video

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY; // posición actual del scroll en píxeles
  const videoPosition = scrollPosition / (document.body.clientHeight - windowHeight) * videoHeight;
  // calcula la posición del video en relación con la posición del usuario en la página
  targetTime = videoPosition;
});

function updateVideoTime() {
  const currentTime = video.currentTime;
  const diff = (targetTime - currentTime) * speed;
  const nextTime = currentTime + diff;
  video.currentTime = nextTime;
  requestAnimationFrame(updateVideoTime);
}

requestAnimationFrame(updateVideoTime);
