//STRINGS

/*prettier-ignore*/
const name = "wes";
/*prettier-ignore*/
const sentence = 'she\'s here'; //Use a backslash to escape a character (Not be considered as a JSX syntax)

const middle = "topher";
const last = `bos`;

const sentence2 = `She's "cool" like that`; //Use backticks to use both inverted and single inverted commas in sentences

// multi lines can be faciliated by backticks

const song = `Ohh
ya
babu`;

//concatenate strings and variables

const hello = "Hello my name is " + name + ". and i am here to say hi";

let hello2 = "hello my name is ";
hello2 = hello2 + name;
hello2 = hello2 + ". Nice to meet you";

//Backticks allow you to put stuff inbetween (varibales,statements )
const hello3 = `hello my name is ${name}. Nice to meet 
you. I am a ${1 + 100} years old`;

const html = `  <div>
    <h2>${name}</h2>
    <p>${hello3}</p>
  </div>`;

document.body.innerHTML = html;

//NUMBERS

const ages = 100;

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;

console.log(`Each kid gets`, eachKidGets);
console.log(`Dad gets`, dadGets);

/*Objects*/

const person = {
  first: "wes",
  last: "bost",
  age: 100,
};

// SNOB'U'SN (string/number/object/boolean/undefined/symbol/null)

//Undefined&Null

/*this is undefined*/
/*Default value given when variable is declared by not assigned*/
let dog;
// console.log(dog);

let somethingUndefined;
const somethingNull = null;

//BOOLEAN

let isDrawing = false;
let newAge = 18;
const isAge = newAge > 17;
console.log(isAge);

console.log(10 == 10); //True
console.log(10 === 10); //True
console.log("10" == 10); //True (since values are same)
console.log("10" === 10); //False (since types are different even though values are same )
