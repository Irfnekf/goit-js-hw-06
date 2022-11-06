function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanEl: document.querySelector("span.color"),
  bodyEl: document.querySelector("body"),
  buttonEl: document.querySelector("button.change-color"),
};

refs.buttonEl.addEventListener("click", (event) => {
  let newColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = newColor;
  refs.spanEl.textContent = newColor;
});
