/**
 *? Використовуючи функцію if...else,
//  *? напишіть код, який запитуватиме:
//  *? "Яка офіційна назва JavaScript?"
//  *? Якщо користувач вводить "ECMAScript",
//  *? то показати через alert: "Вірно!"
//  *? інакше відобразити:"Не знаєте? ECMAScript!"
//  */

// //  1. спитати користувача
// // 2. перевірити відповідь

// const userAnswer = prompt("Яка офіційна назва JavaScript?").trim().toLowerCase();
// if (userAnswer === "ecmascript") {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");

// }


// Напишіть програму, яка отримає від користувача
// число(кількість хвилин) та виведе в консоль
//  рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01: 10
//     * /


const namber = 70;
const oneOver = 60;
const over = Math.floor(namber / oneOver);
const minute = namber % oneOver;
console.log(`${over}:${minute}`);
