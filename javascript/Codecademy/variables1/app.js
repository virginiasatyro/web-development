'use strict';

console.log('Hello world');


var myName = 'Arya';
console.log(myName);
// Output: Arya

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood); // pizza
console.log(numOfSlices);  // 8

/* Let
 * 
 * The let keyword signals that the variable can be reassigned a different value.
*/

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

/* Const
 * 
 * A const variable cannot be reassigned because it is constant. 
 * If you try to reassign a const variable, you’ll get a TypeError.
 * Constant variables must be assigned a value when declared. 
 * If you try to declare a const variable without a value, you’ll get a SyntaxError.
 */
const myName2 = 'Gilberto';
console.log(myName2); // Output: Gilberto


let w = 4;
w = w + 1;
console.log(w); // Output: 5

let w2 = 4;
w2 += 1;
console.log(w2); // Output: 5

let x = 20;
x -= 5;         // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2;         // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2;         // Can be written as z = z / 2
console.log(z); // Output: 4

/////////////////////////////////////////
let levelUp    = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe  = 1152;

// Use the mathematical assignments in the space below:
levelUp    += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe  /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);
/////////////////////////////////////////

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');
// Output: 'I own a pet armadillo.'

const myPet2 = 'armadillo';
console.log(`I own a pet ${myPet2}.`);
// Output: I own a pet armadillo.


const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true;
console.log(typeof unknown3); // Output: boolean