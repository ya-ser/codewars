/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

// SOLUTION 1:
/*
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  } else if (p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock' || p1 === 'scissors' && p2 === 'paper') {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};
*/

// SOULTION 2:

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  // Turn rules into an obj for win conditions
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };
  // Check if p2 is the value of p1
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};