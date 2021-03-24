//play pause square
const playpause = document.querySelector(".playpause");
const squarediv = document.querySelector(".squarediv");

// squarediv.style.width = squarediv.offsetHeight;

let current_student = "stefanniia";
let audio = new Audio("./podcasts/"+current_student+"/podcast_1.mp3");

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

function setImages (current_student) {
  console.log(`./podcasts/${current_student}/cover_1.jpg`)
  coverimg1.src = "./podcasts/"+current_student+"/cover_1.jpg"
  coverimg2.src = "./podcasts/"+current_student+"/cover_2.jpg"
  coverimg3.src = "./podcasts/"+current_student+"/cover_3.jpg"
}

Name.addEventListener("click", function (clickname) {
  current_student = clickname.target.dataset.name
  // current_student = clickname.target.lastChild.textContent;

  console.log("./podcasts/"+current_student+"/cover_1.jpg");
  setImages(current_student)
});

//podcastselector123
podcastone.addEventListener('click', function(e) {
  audio.src = "./podcasts/"+current_student+"/podcast_1.mp3"
  console.log(clicknamefunc());
});
podcasttwo.addEventListener('click', function(e) {
  audio.src = "./podcasts/"+current_student+"/podcast_2.mp3"
});
podcasttree.addEventListener('click', function(e) {
  audio.src = "/podcasts/"+current_student+"/podcast_3.mp3"
});

setImages(current_student)

// playpause button
playpause.addEventListener('click', function(e) {
if (audio.paused) {
    audio.play();
    playpause.innerHTML = "&#x25A0"
}
else {
    audio.pause();
    playpause.innerHTML = "&#x25B6"
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
