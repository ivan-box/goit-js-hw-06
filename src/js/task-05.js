// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
//  <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
let textInput = document.querySelector("#name-input");
let textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", call);

function call() {
  if (textInput.value.trim() === "") {
    return (textOutput.textContent = "Anonymous");
  }
  return (textOutput.textContent = textInput.value);
}
