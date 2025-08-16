// array

const Myarray = [0, 1, 2, 8, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(Myarray[4]);
//console.log(myArr2);

 // Array Methods

// Myarray.push(6)
// Myarray.push(7)
// Myarray.pop()

// Myarray.unshift(9) //Elements to insert at the start of the array.
 //Inserts new elements at the start of an array, and returns the new length of the array.

//   Myarray.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
  
// console.log(Myarray.includes(9)); 
// console.log(Myarray.indexOf(3))

const newArr = Myarray.join() //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(Myarray);
// console.log(newArr);
// console.log(typeof newArr)


// slice,  splice

console.log("A", Myarray);

const Myn1 = Myarray.slice()

console.log(Myn1);
console.log("B ", Myarray);

const Myn2 = Myarray.splice(1, 4)
console.log("C ", Myarray);
console.log(Myn2);