'use strict';

console.log('Hello world');

if (true) {
    console.log('This message will print!');
}
// Prints "This message will print!"

if (false) {
    console.log('The code in this block will not run.');
} else {
    console.log('But the code in this block will!');
}
// Prints "But the code in this block will!" 

/*
Here is a list of some handy comparison operators and their syntax:

    Less than: <
    Greater than: >
    Less than or equal to: <=
    Greater than or equal to: >=
    Is equal to: ===
    Is NOT equal to: !==
*/

10 < 12                // Evaluates to true
'apples' === 'oranges' // false

let hungerLevel = 7;

if (hungerLevel > 7) {
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
}

/* 
There are three logical operators:

    the and operator (&&)
    the or operator (||)
    the not operator, otherwise known as the bang operator (!)
*/

/* Exemples:
if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
} else {
    console.log('Stop');
}

if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Do some work.');
}
*/

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet');
} // Output: 'not bed time yet'


let myVariable = 'I Exist!';
if (myVariable) {
    console.log(myVariable)
} else {
    console.log('The variable does not exist.')
}
/*
 * The code block in the if statement will run because myVariable has a truthy value; 
 * even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value.
 */

/*
The list of falsy values includes:

    0
    Empty strings like "" or ''
    null which represent when there is no value at all
    undefined which represent when a declared variable lacks a value
    NaN, or Not a Number
*/

let numberOfApples = 0;

if (numberOfApples) {
    console.log('Let us eat apples!');
} else {
    console.log('No apples left!');
}

// Prints 'No apples left!'
let username;
let defaultName;
if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger';
}

let defaultName2 = username || 'Stranger'; // username = 'Stranger'


let isNightTime = true;

if (isNightTime) {
    console.log('Turn on the lights!');
} else {
    console.log('Turn off the lights!');
}

// ternary operator - do the same thing of the code above
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!'
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


let stopLight = 'yellow';

if (stopLight === 'red') {
    console.log('Stop!');
} else if (stopLight === 'yellow') {
    console.log('Slow down.');
} else if (stopLight === 'green') {
    console.log('Go!');
} else {
    console.log('Caution, unknown!');
}