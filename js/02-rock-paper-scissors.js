   var playerChoice = prompt("What is your choice: rock, paper, or scissors?");
    
   var computerChoice = Math.ceil(Math.random() *3);

   if (computerChoice < 1) {
       computerChoice = "rock";
   } else if(1 <= computerChoice <= 2) {
       computerChoice = "paper";
   } else {
       computerChoice = "scissors";
   }
   
   
   function game(playerChoice, computerChoice){
   
        //Checking for a tie
        if (playerChoice === computerChoice) {
            return "It is a tie";
        }

       if ((playerChoice!='rock') && (playerChoice!='paper') && (playerChoice!=='scissors')){
            return 'Enter a valid string.'
       }
   
       //Check for Rock
       if (playerChoice === "rock") {
         if (computerChoice === "scissors") {
           return "Player Wins";
         } else {
           return "Computer Wins";
         }
       }

       //Check for Paper
       if (playerChoice === "paper") {
         if (computerChoice === "scissors") {
           return "Computer Wins";
         } else {
           return "Player Wins";
         }
       }

       //Check for Scissors
       if (playerChoice === "scissors") {
         if (computerChoice === "rock") {
           return "Computer Wins";
         } else {
                   return "Player Wins";
         }
       }
   }
   
   game();

   alert(game(playerChoice, computerChoice))
