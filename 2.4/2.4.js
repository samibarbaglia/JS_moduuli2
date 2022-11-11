'use strict';
let list = []
let number = parseInt(prompt("Enter a number or enter 0 to stop program."))

for (let i = 0; number !== 0; i++){
    number = parseInt(prompt("Enter a number or enter 0 to stop program."))
    if (number !== 0)
    {
        list[i] = number
    }
}

let sort_numbers = list.sort(function(a, b){return b-a});
console.log(sort_numbers)