var bcBackground = document.getElementById("home-title-BC");
var adBackground = document.querySelector(".home-title-AD");
var background = document.querySelector(".background");

function gradientTransitionBC () {
  background.classList.add("background-transition");
  //redirect to blockchain
  window.location.href = 'http://www.colorzilla.com'
}

function gradientTransitionAD () {
  background.classList.add("background-transition-AD");
  //redirect to artdomain
  window.location.href = 'http://www.colorzilla.com'
}

bcBackground.addEventListener("click", gradientTransitionBC);
adBackground.addEventListener("click", gradientTransitionAD);