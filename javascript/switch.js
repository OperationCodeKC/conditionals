const people = require('./data').people;

// convert the day of the week number to a string
function getDayName(day) {
    let dayOfWeek;
    switch (day) {
        case 0:
            dayOfWeek = 'Sunday';
            break;
        case 1:
            dayOfWeek = 'Monday';
            break;
        case 2:
            dayOfWeek = 'Tuesday';
            break;
        case 3:
            dayOfWeek =  'Wednesday';
            break;
        case 4:
            dayOfWeek = 'Thursday';
            break;
        case 5:
            dayOfWeek = 'Friday';
            break;
        case 6:
            dayOfWeek = 'Saturday';
            break;
    }
    
    return dayOfWeek
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
