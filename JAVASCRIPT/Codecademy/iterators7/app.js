'use strict';

console.log('Hello world');

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
    return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});

console.log(onlyNumbers);

/*
Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists.
[1, 4, 9, 16, 25]
[5, 3.14, 100]
*/

/* The .forEach() Method

   The first iteration method that we’re going to learn is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array.
*/

const groceries = ['brown sugar', 'salt', 'cranberrie', 'walnuts'];

groceries.forEach(function (groceryItem) {
    console.log(' - ' + groceryItem);
});

/*
    groceries.forEach() calls the forEach method on the groceries array.
    .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
    .forEach() loops through the array and executes the callback function for each element. 
    During each execution, the current element is passed as an argument to the callback function.
    The return value for .forEach() will always be undefined.
*/

// it also can be written as:
groceries.forEach(groceryItem => console.log(groceryItem));

function printGrocery(element) {
    console.log(element);
}

groceries.forEach(printGrocery);


/* The .map() Method

   When .map() is called on an array, it takes an argument of a callback function and returns a new array!
*/

const numbers2 = [1, 2, 3, 4, 5];

const bigNumbers = numbers2.map(number => {
    return number * 10;
});

/* 
    numbers is an array of numbers.
    bigNumbers will store the return value of calling .map() on numbers.
    numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
    return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.
*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(character => {
    return character[0];
})

console.log(secretMessage.join('')); 
// Output: HelloWorld


/* The .filter() Method

    Like .map(), .filter() returns a new array. 
    However, .filter() returns an array of elements after filtering out certain elements from the original array. 
    The callback function for the .filter() method should return true or false depending on the element that is passed to it.
*/

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => {
    return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
/*
    words is an array that contains string elements.
    const shortWords = declares a new variable that will store the returned array from invoking .filter().
    The callback function is an arrow function has a single parameter, word.
    Each element in the words array will be passed to this function as an argument.
    word.length < 6; is the condition in the callback function.
    Any word from the words array that has fewer than 6 characters will be added to the shortWords array.
*/

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
    return num < 250;
}) // 200 3.14 7 13 


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
})


/* The .findIndex() Method

    Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
*/

const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
});
console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5

const greaterThan1000 = jumbledNums.findIndex(num => {
    return num > 1000;
});

console.log(greaterThan1000); // Output: -1

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => {
    return animal === 'elephant';
})


const startsWithS = animals2.findIndex(animal => {
    return animal[0] === 's';
})

console.log(startsWithS); // 3
console.log(animals2[3]);  // seal


/* The .reduce() Method

    The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
*/

const numbers3 = [1, 2, 4, 10];

const summedNums = numbers3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(summedNums) // Output: 17

const summedNums2 = numbers3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums2); // Output: 117

/*
 * Let’s review!

    .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
    .map() executes the same code on every element in an array and returns a new array with the updated elements.
    .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
    .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
    .reduce() iterates through an array and takes the values of the elements and returns a single value.
*/