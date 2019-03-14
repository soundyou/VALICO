const bcBackground = document.getElementById("home-title-BC");
const adBackground = document.querySelector(".home-title-AD");
const background = document.querySelector(".background");

function gradientTransitionBC () {
    background.classList.add("background-transition-BC");
    //redirect to blockchain
    setTimeout(() => {
      window.location.href = 'blockchain.html'
    }, 800);

    background.classList.add("fade-out");


}

function gradientTransitionAD () {
  background.classList.add("background-transition-AD");
  //redirect to artdomain
  window.location.href = 'artdomain.html'
}

bcBackground.addEventListener("click", gradientTransitionBC);
adBackground.addEventListener("click", gradientTransitionAD);

