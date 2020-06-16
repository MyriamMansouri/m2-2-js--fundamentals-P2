// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

const myMax = function(num1, num2) {
    return Math.max(num1, num2);
}

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

const num1 = 2;
const num2 = 3650;
const num3 = 652;
const num4 = 5;

console.log('My max is: ', myMax(myMax(num1,num2),myMax(num3,num4)));


// Q3.3
// Would this work with more integers?
console.log("I think yes by nesting functions like Q3. 2 but it would be awfully written...")
