let score = "7abc";

//  console.log(typeof score); //string
//  console.log(typeof {score}); //object
//  console.log(typeof (score)); //string

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); //Number

// console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Mayank"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); //true

// 1 => true; 0 => false
// "" => false
// "mayank" => true

let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(stringNumber); //33
 console.log(typeof stringNumber) // string