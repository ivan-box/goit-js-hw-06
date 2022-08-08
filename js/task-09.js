// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
{
  /* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */
}

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let buttonChangeColor = document.querySelector(".change-color");
let textColor = document.querySelector(".color");
let bodyColor = document.querySelector("body");

buttonChangeColor.addEventListener("click", call);

function call() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  buttonChangeColor.style.backgroundColor = getRandomHexColor();
  buttonChangeColor.style.borderColor = getRandomHexColor();
  bodyColor.style.color = getRandomHexColor();
  buttonChangeColor.style.color = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}
