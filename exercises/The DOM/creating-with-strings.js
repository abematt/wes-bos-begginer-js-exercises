const item = document.querySelector(".item");

const width = 450;
const src = `https://picsum.photos/${width}`;
const desc = "Many dogs";
const myHTML = `
    <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt= ${desc}/>
    </div>
    `;

//This stays a string untill it is dumped into the dom with innerHTML

//Using innerHTML to dump into dom

// item.innerHTML = myHTML;

// console.log(item.innerHTML);

// const itemImage = document.querySelector(".wrapper img");
// console.log(itemImage);

// itemImage.classList.add("round");

//Using Range and Fragment to add to DOM
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
