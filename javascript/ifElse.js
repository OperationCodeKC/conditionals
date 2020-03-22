const people = require('./data').people;

// loop through the people array
people.forEach( function (person) {

    if (person.dob.getFullYear() < 1965){
        console.log( person.name + ' is a baby boomer');
    }else if (person.dob.getFullYear() > 1964 && person.dob.getFullYear() < 1980){
        console.log( person.name + ' is a Gen Xer');
    }else if (person.dob.getFullYear() > 1979 && person.dob.getFullYear() < 1995){
        console.log( person.name + ' is a Millennial');
    }else if (person.dob.getFullYear() > 1994 && person.dob.getFullYear() < 2016){
        console.log( person.name + ' is a Gen Zer');
    }else{
        console.log('Cannot determine generation of ' + person.name)
    }

});