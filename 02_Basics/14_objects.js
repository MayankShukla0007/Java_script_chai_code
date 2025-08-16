// singleton //important
// object.create

// object literals

 const MySym = Symbol("key1")
 const JsUser = {
    name: "Mayank",
    "Full name": "Mayank Shukla",
    [MySym]: "Mykey1",  //Symbol
    age: 19,
    location: "India", 
    email: "mayank@google.com",
    isLoggedIn: false ,
    lastLoginDays: ["Monday", "Sunday"]
 }

//   console.log(JsUser.name);
//   console.log(JsUser["email"]);
//   console.log(JsUser["Full name"]);
//   console.log(JsUser[MySym]);

  JsUser.email = "Shuklamayank@google.com"
  // Object.freeze(JsUser); // Object on which to lock the attributes.
// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
   
 JsUser.email = "chatgpt@google.com"
// console.log(JsUser);

 JsUser.greeting = function() {
    console.log("Hello JS User");
 }
  JsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.name}`);
 }

  console.log(JsUser.greeting());
  console.log(JsUser.greeting2());

