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
// let total = 0;
// let number = prompt("Введіть число");
// console.log(number);
// while (number !== null) {
//     total += Number(number);
//   console.log(total);
//     number = prompt();
//   console.log(number);
// }
// alert(`Загальна сума введених чисел дорівнює ${total}.`);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tennis",
//     premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user)
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`)
// }

/*OLEKSA*/

/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stonesName) {
//   for (const stone of someStones) {
//     if (stone.name === stonesName) return stone.price * stone.quantity;
//   }
//   return "Камінь не знайдено";
// }
// console.log(calcTotalPrice(stones, "Щебен"));

// /*MAXIM*/

// /* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function totalSallary(obj) {
//     const sallaryArray = Object.values(obj)
//     let total = 0;
//     for (const index of sallaryArray) {
//         total += index
//     }
//     return total;
// }

// console.log(totalSallary(someObj));

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function fruitsTotal(arr) {
//     const newArray = [];
//     let id = 1;
//     for (let item of arr) {
//         const newFruit = {
//             ...item,
//             price: item.price * 0.8,
//             id,
//         };

//         newArray.push(newFruit);
//         id += 1;
//     }
//     return newArray
// }

// console.log(fruitsTotal(fruits));
// console.log(fruits);

//***************** */
// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];
// // const arrd = [...arr];
// // arrd.splice(arrd.indexOf("foo"), 1);
// // arrd.reverse();
// // console.log(arrd.join(" "));
// // console.log(arr);

// const string = arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
//   .reverse()
//   .join(" ");

// console.log(string);



///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];


//============== 1 =======================================
// function arrayChanges(arr) {
//   return arr.map((elem, index) => {
//     return {
//       ...elem,
//       price: elem.price * 0.8,
//       id: index + 1,
//     };
//   })
// }


//============== 2 =======================================

// const arrayChanges = (arr) =>
//   arr.map((elem, index) => 
//      ({
//       ...elem,
//       price: elem.price * 0.8,
//       id: index + 1,
//   }))

//   console.log(arrayChanges(fruits));

/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Одеса", "Умань", "Харків"]
 */
//  const concerts = {
//     Київ: new Date("2020-04-01"),
//     Умань: new Date("2025-07-02"),
//     Вінниця: new Date("2020-04-21"),
//     Одеса: new Date("2025-03-15"),
//     Хмельницький: new Date("2020-04-18"),
//     Харків: new Date("2025-07-10"),
//   };

//   const cities = Object.keys(concerts)
//   const filteredCities = cities.filter((item)=> concerts[item] > new Date())
//   const result = filteredCities.toSorted((a,b) => concerts[a] - concerts[b])

//   console.log(result)

/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

*/
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const newArr = tweets.flatMap(item => {
//   return item.tags
// });

// const result = newArr.reduce((acc, item) => {
// console.log(acc);
//   return { ...acc, [item]: acc[item] ? acc[item]+1 : 1 }
// }, {})
// console.log(result);

/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */


// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const newClient = new Client("fvfv", "gfgf");
// console.log(newClient.login)
// console.log(newClient.login = "trtr")

/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

console.log(checkBrackets(someFn));