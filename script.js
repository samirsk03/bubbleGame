var timer = 60;
var score = 0 ;
var hit;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").innerText = score;
}



function makeBubble() {
    var tbubble = "";

    for (let i = 1; i <= 70; i++) {
        var rn = Math.floor(Math.random() * 10);
        tbubble += `<div class="bubble">${rn}</div>`
    }

    document.querySelector(".tbtm").innerHTML = tbubble;
}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").innerText = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".tbtm").innerHTML = `<h1>Game Over<h1>`;
        }
    }, 1000);
}

function getNewHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").innerText = hit;
}

document.querySelector(".tbtm").addEventListener("click", function(dets){
     var clickedNum = Number(dets.target.innerText);
     if(clickedNum===hit){
        increaseScore();
        getNewHit();
        makeBubble();
     }
})

makeBubble();
runtimer();
getNewHit();
// increaseScore();