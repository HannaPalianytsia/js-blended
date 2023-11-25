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

/*
const namber = prompt("Enter number");
const oneOver = 60;
const over = Math.floor(namber / oneOver);
const modifyOver = String(over).padStart(2,"0");
const minute = namber % oneOver;
const modifyMin = String(minute).padStart(2, "0");
alert(`${modifyOver}:${modifyMin}`);*/

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі парні числа  від max до min  за спаданням
 */

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--){if (i % 2===0){console.log(i)} }

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введене число додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */
let total = 0;
let number = prompt("Введіть число");
console.log(number);
while (number !== null) {
    total += Number(number);
  console.log(total);
    number = prompt();
  console.log(number);
}
alert(`Загальна сума введених чисел дорівнює ${total}.`);