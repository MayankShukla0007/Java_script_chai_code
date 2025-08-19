

 function MYname() {
    console.log("M");
console.log("A");
console.log("Y");
console.log("A");
console.log("N");
console.log("K");
 }

 // MYname();

//  function add2_No(Number1, Number2) {  // () //parameters
//    console.log(Number1 + Number2);
//  }

//  add2_No("Mayank", "Shukla")  // () // Arguments

function add2_No(Number1, Number2) {  // () //parameters
    // let result = Number1 + Number2
    // return result
    return Number1 + Number2
    }

const result =  add2_No(3, 5)

// console.log("result", result);


 function LoginUserMesssage(username){
    //if(username === undefined) {
    if(!username){ // same to same for if(username === undefined) 
        console.log("Please enter the username");
        return
    }
     return `${username} just logged in `
 }
//   console.log(LoginUserMesssage("Mayank Shukla"))
//  console.log(LoginUserMesssage());

 function calculateCartprice(val1, val2, ...num1){
     return num1
 }

// console.log(calculateCartprice(200, 500, 1000, 5000));

 const user = {
    username: "Mayank Shukla",
    price: 199
 }

  function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  }

  //handleObject(user)
handleObject({
    username: "Tony",
    price: 399
})

const myNewArray = [200, 300, 500, 7000]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
