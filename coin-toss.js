'use strict';

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let coinToss = (userChoice) => {
  // handle random "coin toss"
  let outcome = "t";
  if (Math.random() > 0.5) {
    outcome = "h"
  }
  // tell the user if they won or lost
  if (outcome == userChoice) {
    console.log("You won the toss!");
  } else {
    console.log("You lost the toss.");
  }
}

rl.question('Type h for heads or t for tails, then press ENTER\n', (answer) => {
  // execute our coinToss function, passing in the "answer" argument
  coinToss(answer);
  // close the readline stream and exit the program
  rl.close();
});
