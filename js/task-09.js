function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanEl: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
  buttonEl: document.querySelector(".change-color"),
};

refs.buttonEl.addEventListener("click", (event) => {
  let newColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = newColor;
  refs.spanEl.textContent = newColor;
});
