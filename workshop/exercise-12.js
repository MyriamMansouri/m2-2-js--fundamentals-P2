// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well

const calculateLetterGrade = function(grades) {
    average = Math.round(grades.reduce( (acc, value) => acc + value) / grades.length);

    let grade = "";

    if (average < 60 ) {
        grade = "F"
    } else if (average < 70 ) {
        grade = "D"
    } else if (average < 80 ) {
        grade = "C"
    } else if (average < 90 ) {
        grade = "B"
    } else {
        grade = "A"
    };

    return grade;
}

console.log(calculateLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));
console.log(calculateLetterGrade([98, 90]));