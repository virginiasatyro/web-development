'use strict';

console.log('Hello world');

// Area of one rectangle:
const width = 10;
const height = 6;
const area = width * height;
console.log(area); // Output: 60

/*
 * A function declaration consists of:

    The function keyword.
    The name of the function, or its identifier, followed by parentheses.
    A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.
*/

/*
 * We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.
   Take a look at example of hoisting:
*/
console.log(greetWorld()); // Output: Hello, World!

function greetWorld() {
    console.log('Hello, World!');
}

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks(); // Prints 'Thank you for your purchase! We appreciate your business.'

function sayThanks2(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks2('Cole');


function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
greeting('Nick') // Output: Hello, Nick!
greeting()       // Output: Hello, stranger!


function rectangleArea(width, height) {
    let area = width * height
}
console.log(rectangleArea(5, 7)) // Prints undefined


function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
    return width * height;
}


function multiplyByNineFifths(number) {
    return number * (9 / 5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59


// Functions Expressions
const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

/*
 * Arrow functions remove the need to type out the keyword function every time you need to create a function.
 * */

const rectangleArea2 = (width, height) => {
    let area = width * height;
    return area;
};

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

const squareNum = (num) => {
    return num * num;
};
// We can refactor the function as:
const squareNum = num => num * num;