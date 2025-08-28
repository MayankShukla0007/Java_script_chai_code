// Scope {}

// var c = 300  // not uses because 
let a = 300  

 if(true) {
   let a = 10
  const b = 20
 
// c onsole.log("INNER: ", a);
 }
  
//  console.log(a);
//   console.log(b);
//  console.log(c)

 function One() {
    const username = "Mayank Shukla"

    function two() {
        const website = "Youtube"
        // console.log(username);
    }
   // console.log(website);

  //  two();
 }

// One()

if(true) {
    const username = "Mayank Shukla"
    if(username === "Mayank Shukla") {
    const website = " Youtube"
    // console.log(username + website);
    }
  //  console.log(website)
}

 // console.log(username);


 // +++++++++++++++++ interesting +++++++++++++++++++++++++++


console.log(addone(5));
 function addone(num) {
    return num + 1
 }


// addtwo(5)
 const addtwo = function(num) {
    return num + 2
 }
console.log(addtwo(5));
