// primitive

// 7 types : string, Number,  Boolean, null, undefined, symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const idanother = Symbol('123')

 console.log(id == idanother)

 const bigNumber = 24332455446575743564435n

 console.log(typeof(bigNumber))



// Reference (Non primitive)

// Array, Objects, Function


const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "Mayank Shukla",
    age: 20
}

 const MyFunction = function() {
    console.log("Hello Lord Shiva");
 }

 console.log(typeof (MyFunction));

 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //Memory

 // 2 types : stack (primitive), Heap (Non-primitive)

  let myYoutubename = "hrfyhehhrthgr"
 
  let anothername = myYoutubename
  anothername = "chai_ya_coffee"

  console.log(myYoutubename);
  console.log(anothername);

  let user1= {
    email: "user@gmail.com",
    upi: "user@ybl"
  }

let  user2 = user1

user2.email = "Mayank@google.com"

console.log(user1.email)
console.log(user2.email)