let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());


 let myCreatedDate = new Date(2002, 0, 20)
// console.log(myCreatedDate.toDateString());

let anothDate = new Date(2003, 11, 4, 5, 10)
// console.log(anothDate.toLocaleString());

let anothDate2 = new Date("04-12-2003")
// console.log(anothDate2.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(anothDate2.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and time`

console.log( newDate.toLocaleString('default', {
    weekday: "long",
 }));