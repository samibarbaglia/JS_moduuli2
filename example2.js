/*
const names = ['Frank', 'Scott', 'Jasmine', 'Don']

for (let i=0; i < names.length; i++) {
    console.log(names[i]);
}

console.log(`BREAK`)

for (let name of names)
{
    console.log(name);
}
*/

/* const student = {
    firstName: 'Greg',
    lastName: 'Focker',
    studentID: '234359',
    phone: '040 5902123'
}

student.address = 'Schoolroad 7';
delete student.phone;
console.log(student);

let student2 = {
      firstName: 'Ahmed',
      lastName: 'Hussein',
      credits :175,
      hasLeft: function() {return 240-this.credits}
    }

console.log("Student " + student2.firstName
    + " is missing " + student2.hasLeft() + " credits.");


function greet(text, times) {
    for (let i = 1; i <= times; i++) {
        console.log(text + ' ' + i + '. time!');
    }
}

greet('Hi, Miikka', 10);
*/

/* function quadraticSum(first, second) {
    const result = first * first + second * second;
    return result;
}

const num1 = prompt('Enter 1. number.');
const num2 = prompt('Enter 2. number.');
const quad = quadraticSum(num1, num2);
console.log('The quadratic sum of ' + num1+
    ' and ' + num2 + ' is ' + quad); */

/* function foo(t)
{
    for (let i = 0; i < t.length; i++)
    {
        t[i] = t[i] * 2;
    }
}

let taulukko = [10, 20, 30];
foo(taulukko)
console.log(taulukko) */

/* TEHT 10

let noc = parseInt(prompt('Number of candidates: '));
let candidates = [];

for (let i = 0; i < noc; i++)
{
    let cand_name = prompt('Name for candidate ' + (i+1));
    let candidate = {
        name: cand_name,
        votes: 0
    }
    candidates.push(candidate);
}
console.log(candidates)

let nov = parseInt(prompt('Number of voters: '));
let v = []

for (let i = 0; i < nov; i++)
{
    let name = prompt('Who are you voting for? ');
    for (c in candidates) {
        if (c['cand_name'] == name)
            return c.votes == 1;
    }
    console.log(candidates)
}
*/
