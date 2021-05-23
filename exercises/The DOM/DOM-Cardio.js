// Make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("warpper");

// put it into the body
document.body.appendChild(div);

// make an unordered list

// add three list items with the words "one, two three" in them

const unorderedList = `
                    <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    </ul>
`;

// put that list into the above wrapper

div.innerHTML = unorderedList;

// create an image
const image = document.createElement("img");
width = 250;
src = `https://picsum.photos/${width}`;
// set the source to an image
// set the width to 250
image.src = `${src}`;
// add a class of cute
image.classList.add("cute");
// add an alt of Cute Puppy
image.alt = "Cute Puppy";
// Append that image to the wrapper
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it

const paraHTML = `
                <div>
                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>
                </div>
`;

// put this div before the unordered list from above
div.insertAdjacentHTML("beforebegin", paraHTML);

// add a class to the second paragraph called warning
const paragraphOne = document.querySelector("p");
const paragraphTwo = paragraphOne.nextElementSibling;
paragraphTwo.classList.add("warning");

// remove the first paragraph
paragraphOne.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  let ageInDogYears = age / 15;
  ageInDogYears = Math.floor(ageInDogYears);
  name = name.toUpperCase();
  return `<div class="playerCard">
                  <h2>${name} - ${age}</h2>
                  <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}.
                  This would be a tall dog!</p>
                  <button class="delete">Delete</button>
              </div>
      `;
}

// make a new div with a class of cards
const divTwo = document.createElement("div");
divTwo.classList.add("cards");
// Have that function make 4 cards
const cardOne = generatePlayerCard("Abraham", 16, 156);
const cardTwo = generatePlayerCard("Mathew", 32, 126);
const cardThree = generatePlayerCard("Joseph", 56, 213);
const cardFour = generatePlayerCard("Sebastian", 75, 187);
// append those cards to the div
divTwo.insertAdjacentHTML("afterbegin", cardOne);
divTwo.insertAdjacentHTML("afterbegin", cardTwo);
divTwo.insertAdjacentHTML("afterbegin", cardThree);
divTwo.insertAdjacentHTML("afterbegin", cardFour);
// put the div into the DOM just before the wrapper element

div.insertAdjacentElement("beforebegin", divTwo);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

function deleteCard(event) {
  console.log("Deleting Card");
  currentCard = event.currentTarget;
  currentCard.closest(".playerCard").remove();
}

// select all the buttons!
// make out delete function
// loop over them and attach a listener

const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((button) => button.addEventListener("click", deleteCard));
