const playpause = document.querySelector(".playpause");

let audio = new Audio("./pocasts/leon/podcast_1.mp3");

let playtime = document.getElementById("playtime");

playPause.onclick = function() {
if (audio.paused) {
    audio.play();
    // playpause.classList.remove("icon-play")
    // playpause.classList.add("icon-stop")
}
else {
    audio.pause();
    // playpause.classList.remove("icon-stop")
    // playpause.classList.add("icon-play")
  };
};

const slowclock = function() {
  playtime.value = audio.currentTime / audio.duration * 100;
  // timeindicator1.innerHTML = Math.round(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60);
  // time2.value = george.currentTime / george.duration * 100;
  // timeindicator2.innerHTML = Math.round(george.currentTime / 60) + ":" + Math.round(george.currentTime % 60);
}

setIntervalBar = setInterval(slowclock, 1000);

playtime.onchange = function() {
  audio.currentTime = audio.duration * (time1.value / 100);
}


// var about = document.getElementById("aboutrect");


// function opacityChange() {
//   about.classList.add("opacityfull");
// }

// function opacityNone() {
//   about.classList.remove("opacityfull");
// }
