const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.valueOf());
// console.log(balance.toPrecision(3));
// console.log(balance.toFixed(1));

const otherNumber = 123.8967

// console.log(otherNumber.toPrecision(5));

const hundred = 1000000
// console.log(hundred.toLocaleString('en-In'));

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