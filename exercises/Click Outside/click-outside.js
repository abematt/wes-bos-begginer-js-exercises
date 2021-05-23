console.log("hi");

const cardButtons = document.querySelectorAll(".card button");
const modalInnter = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleButtonClick(event) {
  const button = event.currentTarget;
  //Closest only works for selectors and not direct elements
  const card = button.closest(".card");
  const imgSource = card.querySelector("img").src;
  const desc = card.dataset.description;
  const name = card.querySelector("h2").textContent;
  modalInnter.innerHTML = `
            <img src="${imgSource.replace("200", 600)}" alt = "${name}"/>
            <p>${desc}</p>
  `;
  modalOuter.classList.add("open");
}
cardButtons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", function (event) {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
