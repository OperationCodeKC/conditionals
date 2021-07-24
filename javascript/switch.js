const people = require('./data').people;

// convert the day of the week number to a string
function getDayName(day) {
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return undefined;

    }
}

// loop through the people array
people.forEach(person => {

    // example of using a boolean expression
    switch (person.dob == null || person.dob == undefined) {
        case true:
            console.log("No DOB found for " + person.name + ".");
            break;
        case false:
            // show which day the week the person was born on.
            console.log(person.name + " was born on " + getDayName(person.dob.getDay()));
            break;
    }


});