// Code your solutions in this file
function printBadges(array){
  for(let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array;
}

function tailsNeverFails(){
  let num = 0;
  while (Math.random() >= 0.5){
    num++;
  }
return `You got ${num} tails in a row!`;
}
