// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// •	Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// •	Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let imagesList = document.querySelector(".gallery");
console.log(imagesList);
let arr = [];
console.log(
  imagesList.insertAdjacentHTML(
    "afterbegin",
    images.reduce(
      (total, el) =>
        (total += `<li><img class ='img-item' src="${el.url}" alt="${el.alt}"></li>`),
      ""
    )
  )
);
// images.append("li");
// let test1 = document.querySelector(".gallery");
// // console.log(test1);
// let test2 = images.reduce(
//   (total, item) =>
//     (total += `<li><img class ='img-item' src="${item.url}" alt="${item.alt}"></li>`),
//   ""
// );
// console.log(test2);

// // test2.classList.add("img-item");
// test1.insertAdjacentHTML("afterbegin", test2);
