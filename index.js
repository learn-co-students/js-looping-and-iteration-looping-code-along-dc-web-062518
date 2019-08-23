// Code your solutions in this file

function printBadges(employees) {
    for (var i=0; i<employees.length; i++) {

        console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`)
    }
    return employees
}

function tailsNeverFails() {

    let tailsCount = 0
    let isTails = coinFlip()
    while (isTails) {
        tailsCount += 1
        isTails = coinFlip()
    } 
    return `You got ${tailsCount} tails in a row!`
}

function coinFlip() {
    return Math.random() >= 0.5;
}