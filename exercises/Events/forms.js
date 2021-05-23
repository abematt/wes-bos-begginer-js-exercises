console.log("what");

const wes = document.querySelector(".wes");

wes.addEventListener("click", function (event) {
  console.log("you clicked it");

  const shouldChangePage = confirm("This might be bad bad, want to continue?");
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector(`[name="signup"]`);

signupForm.addEventListener("submit", function (event) {
  console.log(event);
  event.preventDefault();
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  name = event.currentTarget.name.value;
  if (name.includes("chad")) {
    alert("Sorry CHAD");
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);

//Some other events to listen for

//focus
//blur
