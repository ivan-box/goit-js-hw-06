// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Copy
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// 1.	Розміри найпершого <div> - 30px на 30px.
// 2.	Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3.	Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
// завуження ментора: при створенні квадратів має чиститись інпут

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let addInput = document.querySelector('[type="number"]');
let btnCreate = document.querySelector("[data-create]");
let btnDestroy = document.querySelector("[data-destroy]");
let elemDiv = document.querySelector("#boxes");

btnCreate.addEventListener("click", call);
btnDestroy.addEventListener("click", callDestroy);
function call() {
  callDestroy();
  let array = [];
  for (let i = 1; i <= addInput.value; i++) {
    const newElemDiv = document.createElement("div");
    newElemDiv.style.width = i * 10 + 20 + "px";
    newElemDiv.style.height = i * 10 + 20 + "px";
    newElemDiv.style.backgroundColor = getRandomHexColor();
    array.push(newElemDiv);
  }
  elemDiv.append(...array);
  // console.log(addInput.value);
}

function callDestroy() {
  elemDiv.innerHTML = "";
}
