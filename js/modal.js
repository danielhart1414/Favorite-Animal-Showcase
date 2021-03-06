/*******************************
MODAL SCRIPT
*******************************/

var animalModal = document.getElementById("animalModal");

function openAnimalModal() {
  animalModal.style.display = "block";
}

function closeAnimalModal() {
  animalModal.style.display = "none";
}

var slideIndex = 1;

document.onkeydown = function(e) {
  evt = e ? e : window.event;
  if (evt.keyCode == 27) {closeAnimalModal();}
  if (evt.keyCode == 37 && animalModal.style.display == "block") {
    advanceSlides(-1);
  }
  if (evt.keyCode == 39 && animalModal.style.display == "block") {
    advanceSlides(1);
  }
};

//Sets modal initially
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Next/previous controls
function advanceSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("animalSlide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = slides[slideIndex-1].getElementsByTagName("img")[0].alt;
}
