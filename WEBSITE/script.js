const playpause = document.querySelector(".playpause");
let audio = new Audio("./podcasts/leon/podcast_1.mp3");
let playtime = document.querySelector(".playtime");

// playpause button
playpause.onclick = function() {
if (audio.paused) {
    audio.play();
}
else {
    audio.pause();
  };
};

//playtimeslider
const slowclock = function() {
  playtime.value = audio.currentTime / audio.duration * 600;
  // timeindicator1.innerHTML = Math.round(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60);
};
setIntervalBar = setInterval(slowclock, 200);
playtime.onchange = function() {
  audio.currentTime = audio.duration * (playtime.value / 600);
}


// var about = document.getElementById("aboutrect");


// function opacityChange() {
//   about.classList.add("opacityfull");
// }

// function opacityNone() {
//   about.classList.remove("opacityfull");
// }
