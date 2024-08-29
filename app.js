let userscore =0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscorepara =document.querySelector("#userscore");
const compscorepara =document.querySelector("#computerscore");

const gencompchoice =()=>{
    const option =["rock","paper","scissor"];
    const randomIDX = Math.floor(Math.random()*3);
return option[randomIDX];
};

const drawgame=() =>{
    msg.innerText ="game was draw,play again";
};

const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText =userscore;
        msg.innerText =`you win ! your ${userchoice} beats ${compchoice}`;
        msg.Style.backgroundcolor ="green";
    }else{
        compscore++;
        compscorepara.innerText =compscore;
        msg.innerText =`you lost ! ${compchoice} beats your ${userchoice}`;
        msg.backgroundcolor ="red";
    }
};

const playgame =(userchoice)=>{
//generate computer choice
const compchoice = gencompchoice();
console.log("comp choice ",compchoice)


if( userchoice === compchoice){
    //draw
    drawgame();
}else {
    let userwin=true;
    if(userchoice==="rock"){
        //scissor,paper
        compchoice==="paper"? false:true;
    }else if (userchoice ==="paper"){
        //rock,scisor
        userwin =compchoice ==="scissor"? false:true;
    }else{
//rock,paper
compchoice==="rock"?false:true;
    }
showwinner(userwin,userchoice,compchoice);
        }
    };



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
playgame(userchoice);
    })
})