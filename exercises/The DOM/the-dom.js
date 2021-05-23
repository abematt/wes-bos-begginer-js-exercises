const p = document.querySelector("p");
console.log(p);

// const imgs = document.querySelector(".item img");
// const item2 = document.querySelector(".item2");
// const item2Image = item2.querySelector("img");
// console.log(item2Image);

// const item = document.querySelector("div.items div.item ");
// const itemImage = item.querySelectorAll("img");
// console.log(itemImage);

// const heading = document.querySelector("h2");
// // heading.textContent = "WHAT";
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizza = document.querySelector(".pizza");
// console.log(pizza.textContent);

// // pizza.textContent = pizza.textContent + `🍕`;
// pizza.insertAdjacentText("afterbegin", `🍕`);
// pizza.insertAdjacentText("beforeend", `🍕`);

//classes

const pic = document.querySelector(".nice");
pic.classList.add("dog");
pic.classList.remove("cool");

function togglerBoi() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", togglerBoi);
console.log(pic.classList);

//Attributes

pic.alt = "cute pup"; //Set Attributes
pic.width = 200; //Set Attributes

console.log(pic.alt); //Get Attributes
console.log(pic.naturalWidth); //Get Attribute

pic.setAttribute("alt", "Really cutieboi"); //Set attribute //Can be used to create custom attributes
console.log(pic.getAttribute("alt")); //Get attribute

//Ideally you shouldn't have custom attributes, but if you do set em use data-

const custom = document.querySelector(".custom");
console.log(custom.dataset); //This is how you access the data- type custom data
