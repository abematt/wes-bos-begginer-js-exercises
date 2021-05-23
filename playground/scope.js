// const first = "wes";
// let second = "bos";
// var age = 100; //Are attached to window object and globally scoped with (window.age)

//Functions are attached to window as well, globally scoped
// function sayHi() {
//   console.log("hi!");
//   return "Goodbye";
// }

// console.log(sayHi());

// const age = 100;

// function go() {
//   const hair = `blonde`;
//   console.log(age);
//   console.log(hair);
// }

// go();
// console.log(age);

// function isCool(name) {
//   if (name === "wes") {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const dog = "snickers";

function logDog() {
  console.log(dog);
}

function go() {
  const dog = "sunny";
  logDog();
}

go();
