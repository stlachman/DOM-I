let intervalID = window.setInterval(startTimer, 10);

let msHundreds = document.getElementById("msHundreds");

let msTens = document.getElementById("msTens");


function startTimer() {
  let start = 1;
  
  while (start < 9) {
    start = start + 1;
    
    msHundreds.innerHTML = start;
    
  }

  
  
  msTens.textContent = 0;
  

}