const name = "Mayank"
const repoCount = 10

//console.log(name + repoCount + "value");

// interpollation

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Mayank-Sh-com-in')

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName[3]);
// console.log(gameName[4]);
// console.log(gameName[5]);

// console.log(gameName._proto_);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 5);
//console.log(newString);

const anotherString = gameName.slice(-8, 4);
//console.log(anotherString);


const newString2 = "     Mayank        "
// console.log(newString2);
// console.log(newString2.trim());

const url = "https://Mayank.com/Mayank%20Shukla"

console.log(url.replace('%20','-'));

console.log(url.includes('Mayank'));

console.log(gameName.split('-'));