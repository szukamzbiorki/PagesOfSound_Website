//play pause square
const playpause = document.querySelector(".playpause");
const squarediv = document.querySelector(".squarediv");

const podcast_div = document.querySelector(".podcasts");
const podcasts = document.querySelectorAll(".podcast");
// var cursor = document.querySelector("#cursor");

var globaldata;
// squarediv.style.width = squarediv.offsetHeight;

// const infobar = document.querySelector("#infobar");
// const inforect = document.queryselector("#inforect");

//slide up on click

$("#infobar").click(function() {
  $("#infobar").toggleClass("up1");
  $("#inforect").toggleClass("up2");
});

// window.addEventListener("mousemove", function(){
//
//   var x = e.pageX;
//   var y = e.pageY;
//   cursor.style.left = x + "px";
//   $(".coursorFollower").css("top", y + "px");
// });

let circle = document.getElementById('cursor');
const onMouseMove = (e) => {
  circle.style.left = (e.pageX + 40) + 'px';
  circle.style.top = (e.pageY + 5) + 'px';
}

const showCursor = (e) => {
  circle.classList.add("showCursorClass");
}

const hideCursor = (e) => {
  circle.classList.remove("showCursorClass");
}

$('.name').on('click', function() {
  $('.message').hide();
  podcast_div.scrollTo(0, 0);
});
$('.specialEpisode').hide();

$('.specialClose').on('click', function() {
  $('.specialEpisode').hide();
});

$('.special').on('click', function() {
  $('.specialEpisode').show();
});

window.onload = function(){
  document.getElementById("loader").style.opacity = "0";
  setTimeout(function(){ document.getElementById("loader").style.display = "none"; }, 1000);
}

var text = ['loading.', 'loading..', 'loading...'];
var counter = 0;
var elem = document.getElementById("loader");
var inst = setInterval(change, 500);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}


let current_student_name = "";
let audio = new Audio();

let playtime = document.querySelector(".playtime");
let volumeslider = document.querySelector(".volume");
const player = document.querySelector(".player");
const time = document.querySelector(".time");

const podcastone = document.querySelector("#one");
const podcasttwo = document.querySelector("#two");
const podcasttree = document.querySelector("#three");

let names = document.querySelector(".namewrapper");

const coverimg1 = document.querySelector(".coverimg1");
const coverimg2 = document.querySelector(".coverimg2");
const coverimg3 = document.querySelector(".coverimg3");

const leftinfo = document.querySelector("#leftinfo");
const rightinfo = document.querySelector("#rightinfo");
const inforect = document.querySelector("#inforect");
// const contents_indiv = document.querySelector("#contents_indiv");

//name selector
names.addEventListener("click", function(clickname) {
  current_student_name = clickname.target.dataset.name;
  setFiles(current_student_name);
});

document.addEventListener('mousemove', onMouseMove);
infobar.addEventListener('mouseover', showCursor);
infobar.addEventListener('mouseleave', hideCursor);


//active selector
var NAME = document.querySelectorAll('.name');

NAME.forEach(function(el, i) {
  el.addEventListener('click', function(event) {
    reset(NAME);
    event.target.classList.add('active');
    podcast_div.scrollTo(0, 0);
    // $('.message').hide();
  });
});

function reset(NAME) {
  NAME.forEach(function(el, i) {
    el.classList.remove('active');
  });
}

function setFiles(current_student_name) {
  coverimg1.src = "./podcasts/" + current_student_name + "/cover_1.jpg";
  coverimg2.src = "./podcasts/" + current_student_name + "/cover_2.jpg";
  coverimg3.src = "./podcasts/" + current_student_name + "/cover_3.jpg";

  $.getJSON("./podcasts/" + current_student_name + "/contents.json", function(json) {
    globaldata = json;
    var titles = [];
    titles[0] = globaldata.title1;
    titles[1] = globaldata.title2;
    titles[2] = globaldata.title3;
    // leftinfo.innerHTML = globaldata.title1;
    inforect.innerHTML = globaldata.description;
    $(".podcasts").scroll(function(event) {
      var scroll = $(".podcasts").scrollTop();
      // console.log(scroll);

      // console.log(podcasts);
      let current = "";
      podcasts.forEach((podcast) => {
        const sectionTop = podcast.offsetTop;
        // console.log(podcast.offsetTop);
        const sectionHeight = podcast.clientHeight;
        // console.log(podcast.clientHeight);
        // console.log(window.pageYOffset);
        if (scroll >= sectionTop - sectionHeight / 2) {
          current = podcast.getAttribute("number");
          // console.log(current);
          // console.log
        }
      });
      rightinfo.innerHTML = current + "/3";
      leftinfo.innerHTML = titles[current - 1];

    });

  });
}

audio.src = "./podcasts/introduction.mp3";
//podcastselector123
podcastone.addEventListener('click', function() {
  audio.src = "./podcasts/" + current_student_name + "/podcast_1.mp3";
  audio.play();
});
podcasttwo.addEventListener('click', function() {
  audio.src = "./podcasts/" + current_student_name + "/podcast_2.mp3";
  audio.play();
});
podcasttree.addEventListener('click', function() {
  audio.src = "./podcasts/" + current_student_name + "/podcast_3.mp3";
  audio.play();
});

setFiles(current_student_name);

// playpause button
playpause.addEventListener('click', function(e) {
  if (audio.paused) {
    audio.play();
    playpause.innerHTML = "&#x25A0"
  } else {
    audio.pause();
    playpause.innerHTML = "&#x25B6"
  };
});

//playtimeslider
const slowclock = function() {
  playtime.value = audio.currentTime / audio.duration * 600;
  if ((Math.round(audio.duration % 60)) < 10) {
  if ((Math.round(audio.currentTime % 60)) < 10) {
    time.innerHTML = Math.round(audio.currentTime / 60) + ":0" + Math.round(audio.currentTime % 60) + "/" + Math.round(audio.duration / 60) + ":0" + Math.round(audio.duration % 60);
  } else {
    time.innerHTML = Math.round(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60) + "/" + Math.round(audio.duration / 60) + ":0" + Math.round(audio.duration % 60);
  }
}else{
  if ((Math.round(audio.currentTime % 60)) < 10) {
    time.innerHTML = Math.round(audio.currentTime / 60) + ":0" + Math.round(audio.currentTime % 60) + "/" + Math.round(audio.duration / 60) + ":" + Math.round(audio.duration % 60);
  } else {
    time.innerHTML = Math.round(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60) + "/" + Math.round(audio.duration / 60) + ":" + Math.round(audio.duration % 60);
  }
}
  // timeindicator1.innerHTML = Math.round(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60);
};

setIntervalBar = setInterval(slowclock, 995);

playtime.onchange = function() {
  audio.currentTime = audio.duration * (playtime.value / 600);
  // $("time").html(audio.currentTime + "/" + audio.duration);
  // time.innerHTML = Math.round(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60) + "/" + Math.round(audio.duration / 60) + ":" + Math.round(audio.duration % 60);
}


// volume slider
volumeslider.onchange = function() {
  audio.volume = volumeslider.value / 100;
};





// *********************
// This Code is for only the floating card in right bottom corner
// **********************


// const navLi = document.querySelectorAll("nav .container ul li");
