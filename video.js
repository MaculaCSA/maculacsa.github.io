var video = document.getElementById("background-video");

window.addEventListener("scroll", function() {
  var scrollPosition = window.pageYOffset;
  var videoPosition = video.offsetTop;
  var videoHeight = video.offsetHeight;

  if (scrollPosition > videoPosition + videoHeight || scrollPosition < videoPosition) {
    video.pause();
  } else {
    var playPosition = (scrollPosition - videoPosition) / videoHeight;
    video.currentTime = video.duration * playPosition;
    video.play();
  }
});