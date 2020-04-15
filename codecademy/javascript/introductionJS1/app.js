'use strict';

console.log('Hello world');
console.log('It was love at first sight.');

console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');

// Prints 5 to the console
console.log(5);

console.log(5);  // Prints 5 

/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/

console.log(/*IGNORED!*/ 5);  // Still just prints 5 

/*
In JavaScript, there are seven fundamental data types:

    Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
    String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.
    Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
    Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
    Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
    Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
    Object: Collections of related data.
*/

console.log('JavaScript')
console.log(2011)
console.log('Woohoo! I love to code! #codecademy')
console.log(20.49)

/*

    Add: +
    Subtract: -
    Multiply: *
    Divide: /
    Remainder: %
*/

console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3

// String Concatenation

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'

console.log('Hello'.length); // Prints 5

/*
Methods

    Remember that methods are actions we can perform. 
*/
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

/*
Built in objects

    Math.random generates a random number between 0 and 1.
    We then multiply that number by 50, so now we have a number between 0 and 50.
    Then, Math.floor() rounds the number down to the nearest whole number.
*/
console.log(Math.random()); // Prints a random number between 0 and 1

console.log(Math.floor(Math.random() * 100)); // 25
console.log(Math.ceil(43.8));               // 44
console.log(Number.isInteger(2017));        // true