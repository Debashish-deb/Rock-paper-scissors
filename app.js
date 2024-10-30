
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput;
    } else {
      console.log('Invalid input');
    };
  };
  
  
  
  const getComputerChoice = () => { 
    let choice= (Math.floor(Math.random()*3));
    if (choice === 0){
      return ('rock');
    }else if(choice === 1){
      return ('paper');
    }else{
      return ('scissors');
    };
  };
  
  const determineWinner = (getUserChoice, getComputerChoice) =>{
    if (getUserChoice === getComputerChoice){
      return ('It is a tie.')
      }
    if(getUserChoice === 'rock'){
      if (getComputerChoice === 'paper'){
        return ('Computer won!');
      }else if(getComputerChoice === 'scissors'){
          return('User won!');
        };
      }
    if(getUserChoice === 'paper'){
      if (getComputerChoice === 'scissors'){
        return ('Computer won!');
      }else if (getComputerChoice === 'rock'){
          return('User won!');
        };
      }
    if(getUserChoice === 'scissors'){
      if (getComputerChoice === 'rock'){
        return ('Computer won!');
      }else if (getComputerChoice === 'paper'){
          return('User won!');
        };
      } 
    if (getUserChoice === 'bomb'){
      return('User won!')
    }
  }
  
  console.log(determineWinner('rock', getComputerChoice()));
  
  