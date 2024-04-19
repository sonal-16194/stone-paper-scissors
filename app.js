const choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#score-user");
let compScorePara = document.querySelector("#score-comp");

const gencompChoice =() => {
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];

}
 
const drawCondition = () => {
    
    msg.innerText = "game was draw ,play again!";
    msg.style.backgroundColor = "#081b31"

};

 const showWinner = (userWin ,userChoice ,compChoice) => {
     if (userWin){
         userScore++;
         userScorePara.innerText = userScore;
         
         msg.innerText = `user is win! your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor ="green";
     }else {
         compScore++;
         compScorePara.innerText = compScore;
         msg.innerText = `computer is win ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
             }

            
        

};
 
const playGame =(userChoice) => {
    console.log("userChoice is =",userChoice);
    const compChoice =  gencompChoice();
    console.log("compChoice is =", compChoice); 

    if(userChoice === compChoice) {
        drawCondition();
    } else {
        let userWin = true;
        if( userChoice === "rock"){
            //scissors,paper
           userWin = compChoice === "scissors" ? true : false;

        } else if ( userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "rock" ? true : false;
        } else {
            //paper ,rock
            userWin = compChoice === "paper"? true :false;
        }
        showWinner(userWin ,userChoice,compChoice);       
    }
    



};


choices.forEach((choice) => {
    choice.addEventListener("click" ,() => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});