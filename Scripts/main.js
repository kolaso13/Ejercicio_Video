// Grab DOM elements
const video = document.querySelector(".video");
const playButton = document.querySelector(".play");
const playButtonIcon = playButton.querySelector("i");
const stopButton = document.querySelector(".stop");
const progressBar = document.querySelector(".progress")
const timestamp = document.querySelector(".timestamp")

// Listen for events
video.addEventListener("click", playPauseVideo);
progressBar.addEventListener("change", setVideoProgress)
playButton.addEventListener("click", playPauseVideo);
stopButton.addEventListener("click", stopVideo);
video.addEventListener("timeupdate", updateVideoProgress)

// Utility functions
function playPauseVideo() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
  video[video.paused ? "play" : "pause"]()
  playButtonToggleIcon()
}

function playButtonToggleIcon() {
  if (video.paused) {
    playButtonIcon.classList.remove("fa-pause")
    playButtonIcon.classList.add("fa-play")
  } else {
    playButtonIcon.classList.remove("fa-play")
    playButtonIcon.classList.add("fa-pause")
  }
}

function stopVideo() {
  video.pause()
  video.currentTime = 0
  playButtonToggleIcon()
  progressBar.value = 0
}

function setVideoProgress() {
  video.currentTime = Number((progressBar.value * video.duration) / 100)
}

function updateVideoProgress() {
  progressBar.value = Number((video.currentTime / video.duration) * 100)
  let minutes = Math.floor(video.currentTime / 60)
  let seconds = Math.floor(video.currentTime % 60)
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  timestamp.textContent = `${minutes}:${seconds}`
}

const VideoEl = document.querySelector('#video');

const speedBtns = document.querySelectorAll('.speed-item');

speedBtns.forEach(speedBtn => {
  speedBtn.addEventListener('click', (ev) => {
    VideoEl.playbackRate = ev.target.dataset.speed;
    speedBtns.forEach((item) => item.classList.remove('active'));
    ev.target.classList.add('active');
  });
});

var myMp4 = document.getElementById("video"),
  mp4Url = "";
  mp4Poster="";

function playVideo(ID) {
  switch (ID) {
    case "one":
      mp4Url = "./Video/VideoR6.mp4";
      mp4Poster="./Video/ImgR6.jpg";
      break;
    case "two":
      mp4Url = "./Video/VideoMW.mp4";
      mp4Poster="./Video/ImgMW.jpg";
      break;
    case "three":
      mp4Url = "./Video/VideoSW.mp4";
      mp4Poster="./Video/ImgSW.jpg";
      break;
    case "four":
      mp4Url = "./Video/VideoB4B.mp4";
      mp4Poster="./Video/ImgB4B.jpg";
      break;
  }
  myMp4.setAttribute("src", mp4Url);
  myMp4.setAttribute("poster", mp4Poster);
}

const volumeBtn = document.querySelector('#control-volume');
const volumeSlider = document.querySelector('.volume-slider');
const volumeFill = document.querySelector('.volume-filled');
let lastVolume = 1;

const syncVolume = (volume) => {
  if (volume > 0.5) {
    volumeBtn.textContent = 'volume_up';
  } else if (volume < 0.5 && volume > 0) {
    volumeBtn.textContent = 'volume_down';
  } else if (volume === 0) {
    volumeBtn.textContent = 'volume_mute';
  }
};

volumeBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  if (VideoEl.volume) {
    lastVolume = VideoEl.volume;
    VideoEl.volume = 0;
    volumeBtn.textContent = 'volume_mute';
    volumeFill.style.width = '0';
  } else {
    VideoEl.volume = lastVolume;
    syncVolume(VideoEl.volume);
    volumeFill.style.width = `${VideoEl.volume * 100}%`;
  }
});

volumeSlider.addEventListener('click', (ev) => {
  let volume = ev.offsetX / volumeSlider.offsetWidth;
  volume < 0.1 ? volume = 0 : volume;
  volumeFill.style.width = `${volume * 100}%`;
  VideoEl.volume = volume;
  syncVolume(volume);
  lastVolume = volume;
});


var elem = document.getElementById("video");

//Boton para hacer grande el video
function abrirFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
//Boton para salir del fullscreen
function CerrrarFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


