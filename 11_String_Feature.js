const game = new String("Mayank Shukla")
// console.log(game.at(2)); // The zero-based index of the desired code unit. A negative index will count back from the last item.
// Returns a new String consisting of the single UTF-16 code unit located at the specified index.

// console.log(game.charAt(4)); //The zero-based index of the desired character.
// Returns the character at the specified index.

// console.log(game.charCodeAt(5)); // this charCodeAT() function is so for index character iics code.

console.log(game.codePointAt(5));// same work for charCodeAt()

const another = ["M", "a", "y", "a", "n", "k"]
const another2 = ["S", "h", "u", "k", "l","a"]
const array = another.concat(another2)
// console.log(array);
// console.log(another.concat(another2));


const str = "cat is a best animal!"

// console.log(str.endsWith("animal!"));
// console.log(str.endsWith("animal")) //Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.