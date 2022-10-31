// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// •	Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// •	Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// •	Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = document.querySelector("#value");
let dataDecrement = document.querySelector('[data-action="decrement"]');
let dataIncrement = document.querySelector('[data-action="increment"]');
let total = 0;
console.log(counterValue, dataDecrement, dataIncrement);

dataDecrement.addEventListener("click", () => call("decrement"));
dataIncrement.addEventListener("click", () => call("increment"));
function call(value) {
  value === "decrement" && total--;
  value === "increment" && total++;
  return (counterValue.textContent = total);
}
