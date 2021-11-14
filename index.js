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