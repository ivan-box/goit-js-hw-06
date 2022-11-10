// Напиши скрипт управління формою логіна.
// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Copy
// 1.	Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2.	Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3.	Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4.	Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// 5.	Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// зауваження метнора: при введені чогось одного (емайл пароль) випригує нотіфікашка що треба заповнити всі данні, при чому коли тисну ок, те що вже ввів стерлось (
// бажано такого не робити, а то доводиться ще раз вводити)

let formLogin = document.querySelector(".login-form");
let formEmail = document.querySelector('[name="email"]');
let formPassword = document.querySelector('[name="password"]');

formLogin.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  if (formEmail.value.trim() === "" || formPassword.value.trim() === "") {
    alert("Fill in the fields!");
  } else {
    const array = {
      mail: formEmail.value,
      password: formPassword.value,
    };
    console.log(array);
  }
  event.currentTarget.reset();
}
