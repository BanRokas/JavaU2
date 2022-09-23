let stopOrRunAnimation = e => {
  let sugalvotasPavadinimas = document.querySelector(".animacija1");
  if(e.target.textContent.includes("Stop")){
    e.target.textContent = 'Start Animation';
    sugalvotasPavadinimas.style.animationPlayState = 'paused';
  } else if(e.target.textContent.includes("Start")){
    e.target.textContent = 'Stop Animation';
    sugalvotasPavadinimas.style.animationPlayState = 'running';
  } else {
    console.log("Įvyko klaida...");
  }
}