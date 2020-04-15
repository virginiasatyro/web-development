'use strict';

console.log('Hello world');

/* Advanced Objects
 *
    how to use the this keyword.
    conveying privacy in JavaScript methods.
    defining getters and setters in objects.
    creating factory functions.
    using destructuring techniques.
*/

const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    }
};

goat.makeSound(); // Prints baaa

/*
 * const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet();
// Output will be "ReferenceError: dietType is not defined"
*/

const goat2 = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(this.dietType);
    }
};

goat2.diet();
// Output: herbivore

// The this keyword references the calling object which provides access to the calling object’s properties.

/* Arrow Functions and this
 * 
    Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object.
    In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.
*/

const goat3 = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet: () => {
        console.log(this.dietType);
    }
};

goat3.diet(); // Prints undefined





