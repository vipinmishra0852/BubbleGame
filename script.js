var timer=60 ;
var Hitrn=0;
var HighestScore=0;
function getNewHit(){
    Hitrn=Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent=Hitrn;
}
var score=0;
function increaseScore(){
score+=10;
document.querySelector('#scoreVal').textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum===Hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
})

function makebubble(){
    
var clutter = "";

for(var i=1;i<=168;i++){
    var rn=Math.floor(Math.random()*10);
  clutter+= `<div class="bubble">${rn}</div>`;
}

document.querySelector('#pbtm').innerHTML=clutter;

}

function runTimer(){
    var timerInt=setInterval(function(){
     if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent=timer;
     }
     else{
        clearInterval(timerInt);
        checkHighestScore(score);
        
     }  
    },1000);
}



function checkHighestScore(score) {
    let sc = localStorage.getItem('Score');
    let pbtmElement = document.querySelector("#pbtm");
    let content = "";

    if (sc == null) {
        content = `
            <div class="Game">    
                <h1>!!Game Over!!</h1>
                </br>
                <h2>Your Score : ${score}</h2>
                <h2>Highest Score : ${score}</h2>
                <button onclick="retryGame()">Retry</button>
            </div>`;
        localStorage.setItem('Score', JSON.stringify(score));
    } 
    else {
        if (pbtmElement) {
            if (score > sc) {
                content = `
                    <div class="Game">
                        <h1>Congratulations!!! You have made a new highest Score 🎉🎉🎉</h1>
                        <br>
                        <h1>!!Game Over!!</h1>
                        </br>
                        <h2>Your Score : ${score}</h2>
                        <h2>Highest Score : ${sc}</h2>
                        <button onclick="retryGame()">Retry</button>
                    </div>`;
                localStorage.setItem('Score', JSON.stringify(score));
            }
             else {
                content = `
                    <div class="Game">
                        <h1>!!Game Over!!</h1>
                        </br>
                        <h2>Your Score : ${score}</h2>
                        <h2>Highest Score : ${sc}</h2>
                        <button onclick="retryGame()">Retry</button>
                    </div>`;
            }
            
        }
    }
    pbtmElement.innerHTML = content;
}


function retryGame() {
    location.reload();
}

runTimer();
makebubble();
getNewHit();

