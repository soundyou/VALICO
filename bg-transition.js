var bcBackground = document.getElementById("home-title-BC");
var adBackground = document.querySelector(".home-title-AD");
var background = document.querySelector(".background");

function gradientTransitionBC () {
  background.classList.add("background-transition");
  //redirect to blockchain
  window.location.href = '/blockchain.html'
}

function gradientTransitionAD () {
  background.classList.add("background-transition-AD");
  //redirect to artdomain
  window.location.href = '/artdomain.html'
}

bcBackground.addEventListener("click", gradientTransitionBC);
adBackground.addEventListener("click", gradientTransitionAD);