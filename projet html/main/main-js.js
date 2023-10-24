let popup = document.getElementById("popup");
function openPopup() {
  document.location = "#";
	popup.classList.add("open-popup");
}
function closePopup() {
	popup.classList.remove("open-popup");
}
let slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}
const mediaQuery = "screen and (max-width:450px)";
  const mql = window.matchMedia(mediaQuery);
  let car = document.getElementsByClassName("carinformation");
function showSlides(n) {
  let i;
  if (n > car.length) {
  	slideIndex = 1;
  }    
  if (n < 1) {
  	slideIndex = car.length;
  }
  for (i = 0; i < car.length; i++) {
    car[i].style.display = "none";  
  }
  if(mql.matches){
    car[slideIndex-1].style.display = "block"; 
  }
  else{
    car[slideIndex-1].style.display = "flex"; 
  }
}
const mediaChanged = (e) =>{
    if (e.matches) {  
      car[slideIndex-1].style.display = "block"; 
    } else {
      car[slideIndex-1].style.display = "flex";
    }
}
mql.addEventListener('change', mediaChanged);
function  response(){
  window.alert("Thank you for taking the time to provide feedback! Your comments and suggestions are invaluable in helping us improve our services. We really appreciate your input!");
}