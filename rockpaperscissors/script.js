
const choices = document.querySelectorAll('.choice');
const userScore = document.querySelector('#user-score')
const computerScore = document.querySelector('#computer-score')
const msg = document.querySelector('#message')
let userS = 0;
let computerS = 0;
console.log(choices);

const computerChoice = () => {
    let choices = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * 3);
    let choice = choices[index];
    return choice;
}

const drawGame = () => {
    console.log('Draw Game');
    msg.innerText = 'Game draw! play again!!'
    msg.style.color = '#212121'

}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log('You win!');
        msg.innerText = `You win! "${userChoice}" beats "${compChoice}"`
        msg.style.color = 'green'
        userS++;
        userScore.innerText = userS;
    }
    else{
        console.log('You Lose!');
        msg.innerText = `You Lost. "${compChoice}" beats "${userChoice}"`
        msg.style.color = 'red'
        computerS++;
        computerScore.innerText = computerS;
    }
}


const playGame = (userChoice) => {
    console.log("user ",userChoice);
    
    const compChoice = computerChoice()
    console.log("comp ",compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }else{
        // assume  user win
        let userWin = false;
        if (userChoice === 'rock') {
            // paper, scissors
            userWin = compChoice === 'paper' ? false : true ;  // (user)rock === paper(comp)
        }else if(userChoice === 'paper'){
            //rock, scissors
            userWin = compChoice === 'rock' ? true : false; // (user)paper === rock (comp)
        }else{
            // rock, paper
            userWin = compChoice === 'paper' ? true : false; // (user)scissors === paper(comp)
        }
        showWinner(userWin, userChoice, compChoice);

    }
    
}

choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        console.log(choice);
        const userChoice = choice.getAttribute('id');
        console.log(userChoice);
        playGame(userChoice)
    })
})