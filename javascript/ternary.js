const people = require('./data').people;

// loop through the people array 
people.forEach( function (person) {
    console.log(person.name + (person.homeOwner ? ' owns' : ' rents' ) );
});