'use strict';

console.log('Hello world');

// Let’s now write this list in JavaScript, as an array:

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

let concepts = ['creating arrays', 'array structures', 'array manipulation'];

const hello = 'Hello World';
console.log(hello[6]);
// Output: W

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0]; 
console.log(listItem);         // 'Fortune favors the brave.'  
console.log(famousSayings[2]); // 'Where there is love there is life.'
console.log(famousSayings[3]); // undefined


let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons);
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

/*
 *  Variables declared with let can be reassigned.
    Variables declared with the const keyword cannot be reassigned.
    However, elements in an array declared with const remain mutable.
    Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
*/

const newYearsResolutions2 = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions2.length);
// Output: 2

// One method, .push() allows us to add items to the end of an array.
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


// Another array method, .pop(), removes the last item of an array. 
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2


// Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others.
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);


const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
    arr.push('lily');
}

addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']


const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
    newArr.pop();
}

removeElement(concept); // ['arrays', 'can', 'be', 'MUTATED']
console.log(concept);   // [ 'arrays', 'can', 'be' ]

// Nested array
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]);    // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1]; // 6
