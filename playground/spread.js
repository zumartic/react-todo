/*
function add (a, b) {
    return a + b;
}

console.log(add(1, 3));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Zumzum'];

var final = [3, ...groupA, ...groupB];

console.log(final);

*/

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25

function greet(a, b){
    console.log('Hi ' + a + ', you are ' + b);
}

greet(...person);
greet(...personTwo);

var names = ['Mika', 'Pentti'];
var final = ['Zum', ...names];

// Hi Andrew -> for.each
final.forEach(function (nimi){
   console.log("Hi " + nimi);
});
