const playpause = document.querySelector(".playpause");
let audio = new Audio("./podcasts/leon/podcast_1.mp3");
let playtime = document.querySelector(".playtime");
let volumeslider = document.querySelector(".volume");
const player = document.querySelector(".player");
const podcastone = document.querySelector(".one");
const podcasttwo = document.querySelector(".two");
const podcasttree = document.querySelector(".tree");
const namename = document.querySelector(".name");

//name selector
namename.addEventListener('click', function(e) {
  console.log(e);
});

//podcastselector123
podcastone.addEventListener('click', function(e) {
  audio.src = "./podcasts/leon/podcast_1.mp3"
  console.log(e);

});
podcasttwo.addEventListener('click', function(e) {
  audio.src = "./podcasts/leon/podcast_2.mp3"
});
// podcasttree.addEventListener('click', function(e) {
//   audio.src = "/podcasts/" + name of selected + "/podcast_3.mp3"
// });

// playpause button
playpause.addEventListener('click', function(e) {
if (audio.paused) {
    audio.play();
    playpause.innerHTML = "pause"
}
else {
    audio.pause();
    playpause.innerHTML = "play"
  };
});

//playtimeslider
const slowclock = function() {
  playtime.value = audio.currentTime / audio.duration * 600;
  // timeindicator1.innerHTML = Math.round(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60);
};
setIntervalBar = setInterval(slowclock, 200);
playtime.onchange = function() {
  audio.currentTime = audio.duration * (playtime.value / 600);
}
// volume slider
volumeslider.onchange = function() {
  audio.volume = volumeslider.value/100;
};