const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ref = document.querySelector("ul");

const createListIngredients = (ingredient) => {
  return ingredient.map((ingredientes) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = ingredientes;
    return listEl;
  });
};

const elements = createListIngredients(ingredients);
ref.append(...elements);
