var text = ['The design of the "Pages of Sound" website is in progress.', 'The design of the "Pages of Sound" website is in progress..', 'The design of the "Pages of Sound" website is in progress...'];
var counter = 0;
var elem = document.getElementById("wrapper");
var inst = setInterval(change, 500);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
