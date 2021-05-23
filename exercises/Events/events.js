console.log("hi");
const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("IT GOT CICKED!");
}

const hooray = () => console.log("Hooooray");

butts.addEventListener("click", hooray);

coolButton.addEventListener("click", handleClick);

// butts.removeEventListener("click", handleClick);
// Event Listener cannot be removed when the function reference is an anon function

//Listen to multiple buy buttons

const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(event) {
  // const button = event.target;
  // console.log(button.textContent);
  // console.log("You are buying it ");
  // console.log(parseFloat(event.target.dataset.price));
  console.log("You clicked button");
  console.log(event.target); //Is the specific source of the event
  console.log(event.currentTarget); //Is the name of the element that triggered the event
  console.log(event.target === event.currentTarget);

  //Stop this event from propogating or bubbling and invoking all the other event listers listening above this
  // event.stopPropagation();
}

window.addEventListener(
  "click",
  function (event) {
    const elementName = event.target.tagName;
    console.log(`You clicked ${elementName} through Window`);
    console.log(event.target);
    console.log(event.currentTarget);
    // event.stopPropagation();
  },
  { capture: true } //This ensures the event capturing is done from the topdown in terms of precedence of order
);

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

// //The parameter buyButton can be named anything, the reference to each entry in the thing being traversed is passed into this by the browser
// function handleBuyButton(buyButton) {
//   buyButton.addEventListener("click", buyItem);
// }

// function buyItem(event) {
//   console.log(event.target.innerHTML);
// }

// //Two ways of handling foreach function for multiple listeners
// buyButtons.forEach(handleBuyButton);

// // Event Listener cannot be removed when the function reference is an anon function or arrow function

// buyButtons.forEach((randomButton) => {
//   randomButton.addEventListener("click", (event) => {
//     const buttonName = event.target.innerHTML;
//     console.log(`You Clicked the button ${buttonName}`);
//   });
// });

const photo = document.querySelector(".photo");
photo.addEventListener("mouseenter", function (event) {
  console.log(event.currentTarget);
  console.log(this);
});
