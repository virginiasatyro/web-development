'use strict';

console.log('Hello world');

/* FOR
 * A for loop contains three expressions separated by ; inside the parentheses:

    1 an initialization starts the loop and can also be used to declare the iterator variable.
    2 a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
    3 an iteration statement is used to update the iterator variable on each loop.
*/

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
} // Output: 0 1 2 3

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
} // Output: 'Grizzly Bear' 'Sloth' 'Sea Lion'

// Nested Loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both loops have the number: ' + yourArray[j])
        }
    }
};


/* WHILE
 * Let’s break down what’s happening with our while loop syntax:

    The counterTwo variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
    We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
    Next, we have our loop’s code block which prints counterTwo to the console and increments counterTwo.
*/

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
    console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
}


/* DO WHILE
 * A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.
 */
 
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

/*
 * Note that the while and do...while loop are different! 
 * Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.
 */

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
    console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false) {
    console.log(secondMessage)
};


/* BREAK
 * The break keyword allows programs to “break” out of the loop from within the loop’s block.
 */

for (let i = 0; i < 99; i++) {
    if (i > 2) {
        break;
    }
    console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

// Banana. Banana. Banana. Orange you glad I broke out the loop!