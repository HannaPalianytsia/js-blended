/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

//  1. спитати користувача
// 2. перевірити відповідь

const userAnswer = prompt("Яка офіційна назва JavaScript?").trim().toLowerCase();
if (userAnswer === "ecmascript") {
    alert("Вірно!");
} else {
    alert("Не знаєте? ECMAScript!");
    
}