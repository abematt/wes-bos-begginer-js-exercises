//Function Call
function calculateBillbasic() {
  //This is the function body
  console.log("Running Calculate Bill");
  const total = 100 * 1.13;
  return total;
}

//Function Call
const myTotal = calculateBillbasic();
console.log("Your Total is $", myTotal);
console.log("Your bill of $", myTotal, "should be paid now");
console.log(`Your total is $${myTotal}`);
console.log(`Your total is ${calculateBillbasic()}`);
console.log("Your bill is", calculateBillbasic());

function CalculateBillParams(billAmount, taxRate = 0.13, tipRate = 0.15) {
  //this is a parameterized function
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const myTotal2 = CalculateBillParams(100, 0.13);
const myTotal3 = CalculateBillParams(200, 0.13);
console.log(myTotal2);
console.log(myTotal3);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo("Wes");
console.log(greeting);

function yellName(name = "Person") {
  return `YELLO ${name.toUpperCase()}`;
}

function fancifyName(name = "Person") {
  return `Fancy ${name}`;
}

console.log(yellName(fancifyName("Abraham")));

//IMPORTANT - YOU HAVE TO PASS UNDEFINED IN THE FUNCTIONS for it default to default value
const myBill = CalculateBillParams(100, undefined, 0.2);
console.log(myBill);
