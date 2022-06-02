const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Enter an array: "));
let third = array[2];
let char = third[1];

if (typeof char === 'string'){
    console.log(char)
}
else {console.log("Error")
}