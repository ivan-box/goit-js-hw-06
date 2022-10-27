// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1.	Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.	Додасть назву інгредієнта як його текстовий вміст.
// 3.	Додасть елементу клас item.
// 4.	Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsList = document.querySelector("#ingredients");
// let markup;
// console.log(
//   (markup = ingredientsList.append(
//     ...ingredients.map((el) => (document.createElement("li").textContent = el))
//   ))
// );

let test4 = document.querySelector("#ingredients");
let arr = [];
ingredients.map((elem) => {
  let test1 = document.createElement("li");
  test1.textContent = elem;
  test1.classList.add("item");
  arr.push(test1);
});

test4.append(...arr);
// console.log(test4);
