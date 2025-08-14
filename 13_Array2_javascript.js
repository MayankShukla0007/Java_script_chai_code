const marval_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

//marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

const all_heros = marval_heros.concat(dc_heros) //concat:- Additional arrays and/or items to add to the end of the array.
  //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(all_heros);

 const all_new_heros = [...marval_heros, ...dc_heros] //spraidout method
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
 // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

  // important 

 console.log(Array.isArray("Mayank")); //The Array.isArray() static method determines whether the passed value is an Array.
  // reture value true if value is an Array; otherwise, false. false is always returned if value is a TypedArray instance.

 console.log(Array.from("Mayank")); //The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
 // return A new Array instance.

  console.log(Array.from({name: "Mayank"})); // interesting case

  let score1 = 100
  let score2 = 200
  let score3 = 300

  console.log(Array.of(score1, score2, score3)); //The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
   // return A new Array instance.
