'use script';
let kohde = document.querySelector('#kohde')

let list  = []

for (i = 0; 1 > 0; i++){
    let number = parseInt(prompt('Input number: '))
    if (list.includes(number)){
        window.alert('Number already in list')
        console.log(list.sort(function(a, b){return a-b}))
        break}
    else list.push(number)
}
