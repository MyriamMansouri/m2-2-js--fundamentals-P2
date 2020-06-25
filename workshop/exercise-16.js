// Q16
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = [];
 
for(let num = 0; num < 1000 ;num++ ) {

    let numArr = num.toString().split('');
    let numLength = numArr.length;
    let armstrongNumber = numArr.reduce( (acc, value) => {
        return acc + Math.pow(value, numLength) 
    }, 0)

    if (armstrongNumber === num) {
        armstrongNumbers.push(num);
    };

}


console.log(armstrongNumbers);
