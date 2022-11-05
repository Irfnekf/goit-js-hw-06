const refs = {
  value: document.querySelector("#value"),
  decrement: document.querySelector("[data-action='decrement']"),
  increment: document.querySelector("[data-action='increment']"),
};

let num = 0;

const render = () => {
  refs.value.textContent = num;
};

const handleDecrement = () => {
  num -= 1;
  render();
};

const handleIncrement = () => {
  num += 1;
  render();
};
render();
refs.decrement.addEventListener("click", handleDecrement);
refs.increment.addEventListener("click", handleIncrement);
