let getComputerChoiceMsg = "";  
let getComputerChoice =()=>{ 
let humanScore=  0;
let computerScore=  0;
    let times = Math.floor(Math.random()*10); 
    if(times >= 0 && times <=3){
        getComputerChoiceMsg ="paper"; 
    }
    else if (times >= 3 &&times <= 6) { 
        getComputerChoiceMsg = "rock";  
    }
    else { 
        getComputerChoiceMsg= "scissors";  
    }
    return getComputerChoiceMsg ; 
}

let getHumanChoice=()=>{ 
    let msg=  prompt("Enter your play!");  
    return msg; 
}

let playRound=(a,b)=> {
    if(a == b){ 
        return `Tie, ${b}`; 
    }
    else{ 
        if((a == "rock" && b == "scissors") || (a=="paper" && b=="rock") || (a == "scissors" && b =="paper")) { 
            return `I won!, ${b}`; 
        }
        else { 
            return `I lose,${b}`;
        }
    }
}

console.log(playRound(getHumanChoice(),getComputerChoice()));



