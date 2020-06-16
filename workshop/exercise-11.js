// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

const calculateAverage = function(grades) {
    return Math.round(grades.reduce( (acc, value) => acc + value) / grades.length)
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
