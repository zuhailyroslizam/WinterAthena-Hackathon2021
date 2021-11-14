let myTaskList = document.getElementsByTagName("LI");
for(let i=0; i<myTaskList.length;i++){
    let span = document.createElement("SPAN");
    let task = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(task);
    myTaskList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for(let index=0; index< close.length; index++){
    close[index].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ""){
        alert("You Must write Something!");
    } else {
        document.getElementById("workList").appendChild(li);
    }
    document.getElementById("task").value = "";

    let span = document.createElement("SPAN");
    let task = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(task);
    li.appendChild(span);

    for(let index=0; index< close.length; index++){
        close[index].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }


}


const para = document.querySelector(".paragraph")
const button = document.querySelector(".boredbtn")

const url = "http://www.boredapi.com/api/activity/"

const getRandom = async () =>{
    let response = await fetch(url);
    let data = await response.json();
    
   console.log(data.activity);

    para.textContent=data.activity;
}

button.addEventListener('onClick',getRandom)
getRandom();
// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  
  // Declare variables to use in our functions below
  
  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }
  
  // Create "start", "pause" and "reset" functions
  
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
  }
  
  function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
  }
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
  }
  
  // Create function to display buttons
  
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }
  // Create event listeners
  
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");
  
  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);
//   end of timer script
