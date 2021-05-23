// function doctorize(firstName) {
//   return `Dr.${firstName}`;
// }

//Anon Function
// function (firstName) {
//     return `Dr.${firstName}`;
//   }

//Function Expression - An anon function attached to a variable
//This function is not hoisted (Javascript will initialize it at the beggining itself)
//A normal function is hoisted and hence is available from the first line itself even if decalred later

// const doctorize = function (firstName) {
//   return `Dr.${firstName}`;
// };

//ARROW FUNCTIONS

// const inchToCM = (inches) => inches * 2.54;

// const add = (a, b = 3) => a + b;

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

//IIFE
//Immediately Invoked Function Expression

// (function () {
//   console.log("Runing the anon function");
//   return "You are cool";
// })();

// (function (age) {
//   console.log("Runing the anon function");
//   console.log(`You are cool because you're ${age} years old`);
//   return `You are cool because you're ${age} years old`;
// })(10);

//METHODS

const abraham = {
  name: "Abraham Mathew",
  //Method
  sayHi: function () {
    console.log(`Hey ${this.name}`);
    console.log("Hey Abraham");
    return "Hey Abraham";
  },
  //ShortHand Method
  yellHi() {
    console.log("HEY ABRAHAM");
  },
  //Arrow Function
  whisperHi: () => {
    console.log("hiiiii abraham");
  },
};

//CALLBACK FUNCTION

//click callback
const button = document.querySelector(".clickMe");
// // button.addEventListener("click", abraham.yellHi);4

// button.addEventListener("click", () => {
//   console.log("hi+");
// });
// button.addEventListener("click", function () {
//   console.log("Clicker");
// });

// //timer callback
// setTimeout(() => {
//   console.log("What");
// }, 1000);
