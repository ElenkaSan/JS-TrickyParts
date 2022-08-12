function guessingGame() {
    let guess = 0;
    let gameWon = false; 
    let random = Math.floor(Math.random() * 100);
    const getGuess = (num) => {
        if (gameWon) return 'The game is over, you already won!';
        guess +=1;
        if (num === random) {
            gameWon = true;
            return `You win! You found ${random} in ${guess} guesses.`
        }
        if (num < random) return `${num} is too low!`;
        if (num > random) return `${num} is too high!`;
    } 
  return getGuess;
}

module.exports = { guessingGame };
