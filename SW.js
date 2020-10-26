var min =0;
var sec =0;
var msec=0;
count =0;
var interval;

 var msecHeading = document.getElementById("msec")
 var secHeading = document.getElementById("sec")
 var minHeading = document.getElementById("min")

var start_id = document.getElementById("start");
var pause_id = document.getElementById("pause");
var stop_id = document.getElementById("reset");

start_id.disabled = false;
pause_id.disabled = true;
stop_id.disabled = true;

 

function timer(){
 msec ++
 msecHeading.innerHTML = msec;
 if(msec >=100){
     sec ++
     secHeading.innerHTML =sec; 
     msec =0;
 }
 else if(sec  >=60){
     min ++
     minHeading.innerHTML = min;
     sec=0
 }

}

function start(){
    interval = setInterval(timer,10);    
    start_id.disabled=true;
    pause_id.disabled = false;
    stop_id.disabled = false;
}

function pause(){
    clearInterval(interval)
    start_id.disabled=false;
    pause_id.disabled = true;
    stop_id.disabled = false;
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    
    start_id.disabled=false;
    pause_id.disabled = false;
    stop_id.disabled = true;

    pause()
    
  
}
