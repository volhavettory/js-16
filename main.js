//ВАРИАНТ 1

// function sumInput() {
//   let = array = [];
//  while (true) {
//      const number = prompt("Введите число");
//      if (number == "") break;
//      array.push(+number);
//    }
//    array.sort();
//    console.log(array);
//  }
//  sumInput();
//ВАРИАНТ 2

// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("Введите число", 0);
//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
// alert(sumInput());
//ВАРИАНТ 3
// function sumInput() {
//   let arr = [];
//   let sum = 0;
//   while (true) {
//     let a = prompt("Введите число");
//     if (!isFinite(a) || a === null || a === "") {
//       for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//       }
//       alert(sum);
//       break;
//     } else {
//       arr.push(+a);
//     }
//   }
// }
// sumInput();

// // задание 1
// const resultOne = document.querySelector(".result");
// let array = ["js", "css", "html"];
// resultOne.innerHTML = array[0];
// //задание 3
// let b = [
//   [1, 2],
//   [1, 2, 3],
//   [1, 2, 3, 4],
// ];
// for (let i = 0; i < b.length; i++) {
//   if (b.length > 3) break;
//   // let d = b[i];
//   // for (let k = 0; k < d.length; k++) {
//   //   if (k < 3) break;
//   // console.log(i);
//   const resulttu = (document.querySelector(".resulttu").innerHTML = i);
// }
// //задание 2
// let a = [0, 1, false, 2, undefined, "", 3, null];
// let c = a.filter(function (currentValue) {
//   return currentValue > 0;
// });
// // console.log(c);
// const resultThree = (document.querySelector(".resultthree").innerHTML = c);

//с бегунком

const squareImput = document.querySelector("#square-imput");
const squareRange = document.querySelector("#square-range");
const basePrice = 50;
const totalPraseauto = document.querySelector("#total-price");
const radioType = document.querySelectorAll('input[name="r"]');
const buttON = document.querySelector("button");

//слушаем событие на импут
squareRange.addEventListener("input", function () {
  squareImput.value = squareRange.value;
});
squareImput.addEventListener("input", function () {
  squareRange.value = squareImput.value;
});
//функция пересчета цены  basePrice * parseInt(squareImput.value);
function calculate() {
  let totalPrase = basePrice * parseInt(squareImput.value);
  for (const radio of radioType) {
    if (radio.checked) {
      totalPrase = totalPrase * parseFloat(radio.value);
      // buttON.onclick = totalPrase;
      totalPraseauto.innerText = totalPrase;
    }
  }
}

calculate();
///находим все импуты на страницы
const inputs = document.querySelectorAll("input");
for (const input of inputs) {
  input.addEventListener("input", function () {
    calculate();
  });
}
