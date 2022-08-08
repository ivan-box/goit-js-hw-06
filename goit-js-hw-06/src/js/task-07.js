// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

let addChangeInputControl = document.querySelector("#font-size-control");
let addChangeText = document.querySelector("#text");

console.log(addChangeInputControl.value);
console.log(addChangeText);
addChangeInputControl.addEventListener("input", changeText);

function changeText() {
  //   console.log(event);
  addChangeText.style.fontSize = addChangeInputControl.value + "px";
  // addChangeText.style.fontSize = event.currentTarget;
}
// console.log(changeText);

// document.getElementsByClassName
// addChangeInputControl.insertAdjacentHTML;
