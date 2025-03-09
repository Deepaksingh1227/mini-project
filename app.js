let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){
   
   if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    
   } else{
     h2.innerHTML=`game over! Your Score was <b>${level}</b><br> Press any key to start`;
     document.querySelector("main-container").style.backgroundColor = "red";
     setTimeout(function(){
        document.querySelector("btn-containers").style.backgroundColor = "#232323";

     },1000);
     reset();
    }
}



function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);

}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
