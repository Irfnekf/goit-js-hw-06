const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontSizeChange = (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControlEl.addEventListener("input", fontSizeChange);
