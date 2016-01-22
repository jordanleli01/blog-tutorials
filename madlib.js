'use strict';

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let wordsArray = [`noun`, `adjective`, `verb`];
let wordsObj = {};

let i = 0;

rl.on('pause', () => {
  if (i < wordsArray.length) {
    rl.resume();
  } else {
    tellTheStory();
    rl.close();
  }
})

rl.on('resume', () => {
  let currentWord = wordsArray[i];
  rl.question(`Please type a ${currentWord}: `, (newWord) => {
    wordsObj[currentWord] = newWord;
    i++;
    rl.pause();
  });
})

console.log(`Let's do this!`);
rl.pause();

let tellTheStory = () => {
    console.log(
      `Today, the ${wordsObj.noun} saw the ${wordsObj.adjective} ogre and ${wordsObj.verb}!`
    );
}






