
// var count = 0;

// function timer(){
//     count++
//     console.log(count)
// }
// setInterval(timer,60000)

var hour = 00;
var min = 00;
var sec = 00;
var milisec = 00;

var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var milisecHeading = document.getElementById("milisec");
var interval;
var button = document.getElementById("btnGrad");
function timer(){
    milisec++
    milisecHeading.innerHTML = milisec;
    if (milisec >=100){
        sec++
        secHeading.innerHTML = sec;
        milisec = 0;}
            else if (sec >=10){
            min++
            minHeading.innerHTML = min;
            sec = 0; }
            else if (min >=2){
                hour++
                hourHeading.innerHTML = hour;
                min = 0;
            }
    }

function start(){
    interval = setInterval(timer, 10)
}
function stop(){
    clearInterval(interval)
}

function reset(){
    hour = 00;
    min = 00;
    sec = 00;
    milisec = 00;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    milisecHeading.innerHTML = milisec;
    clearInterval(interval)
}
function startStop() {
    if(button.innerHTML === "Start") {
        interval = setInterval(timer,10);
        button.innerHTML = "Stop";
        button.style.background = 'linear-gradient(to right, rgb(4, 107, 175), rgb(128, 0, 128), rgb(4, 107, 175))';
        // button.style.background = 'linear-gradient(800080, 800080,800080)';
        
        
    }
    else {
        clearInterval(interval);
        button.innerHTML = "Start";
        button.style.background = 'linear-gradient(to right, rgb(128, 0, 128), rgb(4, 107, 175), rgb(128, 0, 128))';
        // button.style.background = 'linear-gradient(800080, 046BAF,800080)';
        
       
    }
}