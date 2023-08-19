var timer = 60;
var score = 0;
var HitRn;

function NewScore(){
    score += 10;
    document.querySelector("#ScoreVal").textContent = score;
}

function getNewHit(){
    HitRn = Math.floor(Math.random()*10);
    document.querySelector("#HitVal").textContent = HitRn;
}

function MakeBubble(){
    var clutter = "";
    
    for(var i=1;i<=90; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
     document.querySelector("#main-btm").innerHTML = clutter;

}    


function runTimer(){
   var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#main-btm").innerHTML = `<h1>Game-Over!</h1>`;
        }
    },1000);
}

document.querySelector("#main-btm").addEventListener("click",function(dets){
   var clickedNumber = (Number(dets.target.textContent));
   if(clickedNumber === HitRn){
    NewScore();
    MakeBubble();
    getNewHit();

   }
})

getNewHit();
runTimer();
MakeBubble();
