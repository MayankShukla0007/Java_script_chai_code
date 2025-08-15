// const tinderUser = new Object() // singleton object
 const tinderUser = {} // This is non-singleton object

 tinderUser.id = "123asd"
 tinderUser.name = "Tony"
 tinderUser.IsLoggedIn = false

 // console.log(tinderUser);

 const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Mayank",
            lastname: "Shukla"
        }
    }
 }

//   console.log(regularUser.fullname);
//   console.log(regularUser.fullname.userfullname.firstname);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "c", 4: "d"}
  const obj4 = {5: "e", 6: "f"}

//  const obj3 = {obj1, obj2}
//  const obj3 = Object.assign({}, obj1, obj2, obj4)

 const obj3 = {...obj1,...obj2,...obj4} //best
 // console.log(obj3);

  const user = [
    {
        id: 1,
    email: "m@gmail.com"
  },
  {
        id: 1,
    email: "m@gmail.com"
  },
  {
        id: 1,
    email: "m@gmail.com"
  }
]

 user[1].email
 console.log(tinderUser);

 console.log(Object.keys(tinderUser));  // Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
// Returns the names of the enumerable string properties and methods of an object.

 console.log(Object.values(tinderUser)); // Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 //Returns an array of values of the enumerable own properties of an object.

 console.log(Object.entries(tinderUser)); // Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 // Returns an array of key/values of the enumerable own properties of an object.

 console.log(tinderUser.hasOwnProperty('name')); // A property name.
 // Determines whether an object has a property with the specified name.