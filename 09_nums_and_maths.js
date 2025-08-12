const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); //Specifies a radix for converting numeric values to strings. This value is only used for numbers.
 // Returns a string representation of an object.

// console.log(balance.valueOf()); //Returns the primitive value of the specified object.

// console.log(balance.toPrecision(3)); // Number of significant digits. Must be in the range 1 - 21, inclusive.
// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

// console.log(balance.toFixed(1)); //Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 // Returns a string representing a number in fixed-point notation.

const otherNumber = 123.8967

// console.log(otherNumber.toPrecision(5)); // Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const hundred = 1000000
// console.log(hundred.toLocaleString('en-In'));

console.log(otherNumber.toExponential(3));

//************************ Maths ************************************ 

// console.log(Math);
// console.log(Math.abs(-8));// negative change positive
// console.log(Math.round(7.6)); // Rount off hota hai
// console.log(Math.ceil(4.3)); // Returns the smallest integer greater than or equal to its numeric argument.
// console.log(Math.floor(4.7)); //Returns the greatest integer less than or equal to its numeric argument.
// console.log(Math.min(5,6,7,82,3,5,1,55)); //Returns the smaller of a set of supplied numeric expressions.
// console.log(Math.max(5,6,7,82,3,5,1,55)); //Returns the larger of a set of supplied numeric expressions.

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()* 10 + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); 