document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', playGame);
});

function playGame(event) {
    const userChoice = event.target.id;
    const choices = ['stone', 'scissors', 'sheet'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultText = determineWinner(userChoice, computerChoice);
    
    document.getElementById('result-text').textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${resultText}`;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "ფრეა!";
    }
    if ((userChoice === 'stone' && computerChoice === 'scissors') || 
        (userChoice === 'scissors' && computerChoice === 'sheet') || 
        (userChoice === 'sheet' && computerChoice === 'stone')) {
        return "შენ მოიგე!";
    } else {
        return "შენ წააგე!";
    }
}
