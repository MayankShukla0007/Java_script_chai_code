const user = {
    username : "Mayank Shukla",
    price : 999,

    welcomeMessage: function() {
      console.log(`${this.username}  welcome to website`);
      console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai() {
  let username = "Mayank shukla"
  console.log(this.);
}

chai()