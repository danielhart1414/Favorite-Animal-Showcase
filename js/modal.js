/*******************************
MODAL SCRIPT
*******************************/

function openAnimalModal() {
  document.getElementById("animalModal").style.display = "block";
}

function closeAnimalModal() {
  document.getElementById("animalModal").style.display = "none";
}

var slideIndex = 1;

//Sets modal initially and provides thumbnail control
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
  var imgThumbs = document.getElementsByClassName("imgThumb");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < imgThumbs.length; i++) {
    imgThumbs[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  imgThumbs[slideIndex-1].classList.add("active");
  captionText.innerHTML = imgThumbs[slideIndex-1].alt;
}
