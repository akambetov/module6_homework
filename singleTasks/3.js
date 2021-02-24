/*Задание 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат. */

function firstNum(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

const sum = firstNum(10);
const result = sum(25);
console.log(result);
