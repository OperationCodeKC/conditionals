const people = require('./data').people;

// loop through the people array and only
// show the people who are baby boomers
people.forEach( function (person) {

    if (person.dob.getFullYear() < 1965){
        console.log( person.name + ' is a baby boomer');
    }

});