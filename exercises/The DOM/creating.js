console.log("Hello");

const myParagraph = document.createElement("p");
myParagraph.textContent = "I am an inserted element";
myParagraph.classList.add("special");
console.log(myParagraph);

const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/300";
myImage.alt = "nice little image";
console.log(myImage);

const myDiv = document.createElement("div");
myDiv.classList.add("warpper");
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

//if we want to add something to the top , a heading

const heading = document.createElement("h2");
heading.textContent = "I am an added heading";

myDiv.insertAdjacentElement("afterbegin", heading);

//Inserting a list exercise

const listDad = document.createElement("ul");

const listElementThree = document.createElement("li");
listElementThree.textContent = "One";

const listElementFour = document.createElement("li");
listElementFour.textContent = "Two";

const listElementFive = document.createElement("li");
listElementFive.textContent = "Three";

listDad.appendChild(listElementThree);
listDad.appendChild(listElementFour);

document.body.insertAdjacentElement("afterbegin", listDad);

listElementThree.insertAdjacentText("beforebegin", listElementOne);

listDad.appendChild(listElementFive);
