// 1.	Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2.	Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

let test = document.querySelectorAll(".item");
console.log("Number of categories: " + test.length);

// let test2 = document.querySelectorAll("ul>li.item>h2").textContent;
// console.log(test2);
test.forEach((elem) => {
  let title = elem.firstElementChild.textContent;
  let list = elem.lastElementChild.children;
  console.log("Category: " + title);
  console.log("Elements: " + list.length);
});
