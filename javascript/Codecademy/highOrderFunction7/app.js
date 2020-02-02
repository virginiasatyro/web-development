'use strict';

console.log('Hello world');

// Higher-order functions are functions that accept other functions as arguments and/or return functions as output.
 
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!

/*
 * Notice how we assign announceThatIAmDoingImportantWork without parentheses as the value to the busy variable. 
 * We want to assign the value of the function itself, not the value it returns when invoked.
 *
 * In JavaScript, functions are first class objects.
 * This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.
 *
 * Since functions are a type of object, they have properties such as .length and .name and methods such as .toString().
 *
 * Functions are special because we can invoke them, but we can still treat them like any other type of data.
*/

const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);

/*
 *
    Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers

    We can work with functions the same way we would any other type of data including reassigning them to new variables

    JavaScript functions are first-class objects, so they have properties and methods like any object

    Functions can be passed into other functions as parameters

    A higher-order function is a function that either accepts functions as parameters, returns a function, or both
*/