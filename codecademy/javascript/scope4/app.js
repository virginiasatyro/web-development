'use strict';

console.log('Hello world');

/*
 * Scope

 Scope defines where variables can be accessed or referenced.
*/

// Block:
const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue 
};

// Block:
if (dusk) {
    let color = 'pink';
    console.log(color); // pink
};

const city = 'New York City';
function logCitySkyline() {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());
// Prints: The stars over the Empire State Building in New York City


const color = 'blue' // global scope

const returnSkyColor = () => {
    return color; // blue 
};

console.log(returnSkyColor()); // blue

/* 
 * Block Scope

   When a variable is defined inside a block, it is only accessible to the code within the curly braces {}.
*/

const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue 
};

logSkyColor();      // blue 
console.log(color); // ReferenceError

// Scope pollution
let num = 50;

const logNum = () => {
    num = 100; // Take note of this line of code
    console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

/*
 * Let’s review the following terms:

    Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
    Blocks are statements that exist within curly braces {}.
    Global scope refers to the context within which variables are accessible to every part of the program.
    Global variables are variables that exist within global scope.
    Block scope refers to the context within which variables that are accessible only within the block they are defined.
    Local variables are variables that exist within block scope.
    Global namespace is the space in our code that contains globally scoped information.
    Scope pollution is when too many variables exist in a namespace or variable names are reused.
*/