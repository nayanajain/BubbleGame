var score=0;
var hval=Math.floor(Math.random()*10);
function makeBubble() {
var clutter="";


for(let i=0;i<=197;i++){
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}
document.getElementById("pbtm").innerHTML=clutter;
}

var timer=60;
function runTimer() {
   setInterval(function() {
    
    if(timer >=0){
        document.querySelector('.timer').textContent=timer;
    timer--;
    }
    else {
        clearInterval(timer);
        document.querySelector("#pbtm").innerHTML="";
    }
   },1000);

  
}

function updateHitVal() {
 hval = Math.floor(Math.random()*10);
document.querySelector('.hitval').textContent=hval;
}

function updateScore(){
    score+=10;
    document.querySelector('.score').textContent=score;
}

document.querySelector('#pbtm').addEventListener("click", function(d) {
   // alert("chal rha hai"+d.target.innerHTML);
    var clickednum = Number(d.target.innerHTML);
    alert(hval+"..");
    if(clickednum==hval)
    {
        updateScore();
        makeBubble();
        updateHitVal();
    }
   // console.log(Number(d.target.innerHTML));
})

runTimer();
makeBubble();
updateHitVal();
//updateScore();