// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names) {
  for (let a = 0; a < names.length; a++) {
    console.log(`Welcome ${names[a]}! You are employee #${a + 1}.`)
  }
  return names
}

function tailsNeverFails() {
  let tails = 0
  while (Math.random() >= 0.5) {
    tails++
  }
  return `You got ${tails} tails in a row!`

}
