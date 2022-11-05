const totalCategory = document.querySelectorAll(".item");
console.log(`Number of categories:${totalCategory.length}`);

const categoryAll = [...totalCategory]
  .map(
    (cat) =>
      `Category: ${cat.children[0].textContent} 
Elements: ${cat.children[1].children.length}`
  )
  .join("\n");
console.log(categoryAll);
