const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Enter an array: "));
let length = array.length

console.log(array[length-1]);