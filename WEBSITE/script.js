const playpause = document.querySelector(".playpause");
const squarediv = document.querySelector(".squarediv");


squarediv.style.width = squarediv.offsetHeight;

let audio = new Audio("./podcasts/Bartosz Pierscinski/podcast_1.mp3");

let playtime = document.querySelector(".playtime");
let volumeslider = document.querySelector(".volume");
const player = document.querySelector(".player");

const podcastone = document.querySelector(".one");
const podcasttwo = document.querySelector(".two");
const podcasttree = document.querySelector(".tree");

let Name = document.querySelector(".namewrapper");

const coverimg1 = document.querySelector(".coverimg1")
const coverimg2 = document.querySelector(".coverimg2")
const coverimg3 = document.querySelector(".coverimg3")

//name selector
Name.addEventListener("click", function (clickname) {
  console.log("./podcasts/"+clickname.target.lastChild.textContent+"/cover_1.jpg");
  coverimg1.src = "./podcasts/"+clickname.target.lastChild.textContent+"/cover_1.jpg"
  coverimg2.src = "./podcasts/"+clickname.target.lastChild.textContent+"/cover_2.jpg"
  coverimg3.src = "./podcasts/"+clickname.target.lastChild.textContent+"/cover_3.jpg"
});

//podcastselector123
podcastone.addEventListener('click', function(e) {
  audio.src = "./podcasts/Bartosz Pierscinski/podcast_1.mp3"
  console.log(clicknamefunc());
});
podcasttwo.addEventListener('click', function(e) {
  audio.src = "./podcasts/Bartosz Pierscinski/podcast_2.mp3"
});
podcasttree.addEventListener('click', function(e) {
  audio.src = "/podcasts/"+ +"/podcast_3.mp3"
});

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
