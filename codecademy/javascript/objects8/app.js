'use strict';

console.log('Hello world');

let spaceship = {}; // spaceship is an empty object

// An object literal with two key-value pairs
spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
}

// Dot notation
'hello'.length; // Returns 5

spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
};
spaceship.homePlanet;       // Returns 'Earth',
spaceship.color;            // Returns 'silver',
spaceship.favoriteIcecream; // Returns undefined

// Bracket notation []
['A', 'B', 'C'][0]; // Returns 'A'

spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
};
spaceship['Active Duty'];     // Returns true
spaceship['Fuel Type'];       // Returns  'Turbo Fuel'
spaceship['numCrew'];         // Returns 5
spaceship['!!!!!!!!!!!!!!!']; // Returns undefined

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

const spaceship2 = { type: 'shuttle' };
// spaceship2 = { type: 'alien' }; // TypeError: Assignment to constant variable.
spaceship2.type = 'alien';      // Changes the value of the type property
spaceship2.speed = 'Mach 5';    // Creates a new key of 'speed' with a value of 'Mach 5'

const spaceship3 = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    mission: 'Explore the universe'
};

delete spaceship.mission;  // Removes the mission property

// Methods
const alienShip = {
    invade: function () {
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip3 = {
    retreat: function () {
        console.log('We no longer wish to conquer your planet. It is full of dogs, which we do not care for.');
    }
}

// Write your code below
const alienShip2 = {
    retreat: function () {
        console.log(retreatMessage);
    },
    takeOff: function () {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
}

alienShip2.retreat(); // 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.'
alienShip2.takeOff(); // 'Spim... Borp... Glix... Blastoff!'

const spaceship4 = {
    telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') }
        }
    },
    engine: {
        model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: 'HD'
        },
        'back-up': {
            battery: 'Lithium',
            terabytes: 50
        }
    }
}; 

spaceship4.nanoelectronics['back-up'].battery; // Returns 'Lithium'

/* Pass By Reference

    Objects are passed by reference. 
    This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object.
    As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).
*/

const spaceship5 = {
    homePlanet: 'Earth',
    color: 'silver'
};

let paintIt = obj => {
    obj.color = 'glorious gold'
};

paintIt(spaceship5);

spaceship5.color // Returns 'glorious gold'

//
let spaceship6 = {
    homePlanet: 'Earth',
    color: 'red'
};
let tryReassignment = obj => {
    obj = {
        identified: false,
        'transport type': 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(spaceship6) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship6 = {
    identified: false,
    'transport type': 'flying'
}; // Regular reassignment still works.


/* Looping Through Objects
 * 
    JavaScript has given us alternative solution for iterating through objects with the for...in syntax .
    for...in will execute a given block of code for each property in an object.
*/

let spaceship7 = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};
// for...in
for (let crewMember in spaceship7.crew) {
    console.log(`${crewMember}: ${spaceship7.crew[crewMember].name}`)
};

/*
 * let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};
*/