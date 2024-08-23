let userscore =0;
let compscore=0;

const choices =document.querySelectorAll(".choice");

const gencompchoice =()=>{
    const option =["rock","paper","scissor"];
    const randomIDX = Math.floor(Math.random()*3);
return option[randomIDX];
}

const drawgame=() =>{
    console.log("game was draw")
};

const showwinner=(userwin) =>{
    if(userwin){
        console.log("you win!");
    }else{
        console.log("you lost");
    }
}

const playgame =(userchoice)=>{
    console.log("user choice",userchoice);
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
showwinner(userwin);
        }
    };



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
playgame(userchoice);
    })
})
