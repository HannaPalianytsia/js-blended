//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
// const alertButtonRef = document.querySelector("#alertButton"); // Ref або El
// const alertInputRef = document.querySelector("#alertInput");

// alertButtonRef.addEventListener("click", onAlertButtonClick);

// function onAlertButtonClick() {
//     alert(alertInputRef.value);
// }

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const inputLeftRef = document.querySelector('#leftSwapInput');
// const inputRightRef = document.querySelector('#rightSwapInput');
// const btnSwapRef = document.querySelector('#swapButton');

// btnSwapRef.addEventListener("click", onBtnSwapClick)

// function onBtnSwapClick() {
//   const inputLeftValue = inputLeftRef.value;
//   const inputRightValue = inputRightRef.value;

//   inputLeftRef.value = inputRightValue;
//   inputRightRef.value = inputLeftValue;

// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const inputEl = document.querySelector("#passwordInput");
// const btnEl = document.querySelector("#passwordButton");

// btnEl.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   if (btnEl.textContent === "Приховати") {
//     inputEl.setAttribute("type", "password");
//     btnEl.textContent = "Розкрити";
//   } else {
//     inputEl.setAttribute("type", "text");
//     btnEl.textContent = "Приховати";
//   }
// }

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
// const decreaseBtnRef = document.querySelector("#decrease");
// const increaseBtnRef = document.querySelector("#increase");
// const boxDivRef = document.querySelector("#box");

// decreaseBtnRef.addEventListener("click", onDecreaseBtnClick);
// increaseBtnRef.addEventListener("click", onIncreaseBtnClick);

// function onDecreaseBtnClick() {
//   const size = parseInt(getComputedStyle(boxDivRef).width);
//   boxDivRef.style.width = size - 10 + "px";
//   boxDivRef.style.height = size - 10 + "px";
// }
// function onIncreaseBtnClick() {
//   const size = parseInt(getComputedStyle(boxDivRef).width);
//   boxDivRef.style.width = size + 10 + "px";
//   boxDivRef.style.height = size + 10 + "px";
// }

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/
addEventListener('click',(event) => {
  if (event.target.id === 'place') {
    console.log(true);
  }
    
})

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
const doubleBtnRef = document.querySelector("#double");
const listItemRef = document.querySelectorAll(".listItem");

doubleBtnRef.addEventListener("click", () => {
  listItemRef.forEach((element) => { 
    element.textContent = BigInt(element.textContent) ** 2n;
  });
});

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
