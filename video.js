const video = document.getElementById('video');
let animationFrameId = null;

// Al hacer scroll, se actualiza el tiempo del video

function handleScroll() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  animationFrameId = requestAnimationFrame(() => {
    const windowHeight = window.innerHeight;
    const pageHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 0 && windowHeight > 0 && pageHeight > 0) {
      const totalTime = video.duration;
      const currentTime = scrollPosition / (pageHeight - windowHeight) * totalTime;
      video.currentTime = currentTime;
    }
  });
}

video.addEventListener('loadedmetadata', () => {
  window.addEventListener('scroll', handleScroll);
});