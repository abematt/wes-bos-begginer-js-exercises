//1. Select the elements on the page : canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shake = document.querySelector(".shake");

//2. Setup our canvas for drawing
// const width = canvas.width;
// const height = canvas.height;

//Create variables width and height that are the same as the canvas width and height
const { width, height } = canvas; //Destructuring , basically, doing the same thing as line 7,8

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

const MOVE_AMOUNT = 30;
//Create a variables for changing colour
let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
//Create random x and y starting points on the canvas

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 30;

ctx.beginPath(); //Start the drawing at a position
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//3. Write a draw function
function draw({ key }) {
  //Increment the hue
  hue = hue + 10 * Math.random();
  console.log(hue);
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  //Start Path
  ctx.beginPath();
  ctx.moveTo(x, y);
  //Move the pointer based on user input
  switch (key) {
    case "ArrowUp":
      y = y - MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y = y + MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x = x - MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x = x + MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.moveTo(x, y);
  ctx.stroke();
}

//4. Write a handler for keys
function handleKey(event) {
  //   event.preventDefault();
  if (event.key.includes("Arrow")) {
    event.preventDefault();
    draw({ key: event.key });
  }
}
//5. Clear/Shake function
function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function () {
      console.log("Done Shake");
      canvas.classList.remove("shake");
    },
    { once: true } // This argument of addEventListener automatically removes itself after its done listening
  );
}

//6. Listen for arrow keys
window.addEventListener("keydown", handleKey);
shake.addEventListener("click", clearCanvas);
